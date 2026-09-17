import { Component, OnInit, OnDestroy, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

@Component({
  selector: 'app-particle-canvas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './particle-canvas.component.html',
  styleUrl: './particle-canvas.component.css'
})
export class ParticleCanvasComponent implements OnInit, OnDestroy {
  @ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D | null;
  private animationFrameId: number | null = null;
  private particles: Particle[] = [];
  private width = 0;
  private height = 0;

  private mouse: { x: number | null; y: number | null; radius: number } = {
    x: null,
    y: null,
    radius: 150
  };

  ngOnInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) return;

    this.updateDimensions();
    this.initParticles();
    this.animate();
  }

  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateDimensions();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  @HostListener('window:mouseleave')
  onMouseLeave(): void {
    this.mouse.x = null;
    this.mouse.y = null;
  }

  private updateDimensions(): void {
    const canvas = this.canvasRef.nativeElement;
    this.width = canvas.width = window.innerWidth;
    this.height = canvas.height = window.innerHeight;
  }

  private initParticles(): void {
    this.particles = [];
    const particleCount = Math.min(Math.floor(this.width / 16), 85);

    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.2 + 1,
        baseAlpha: Math.random() * 0.45 + 0.25
      });
    }
  }

  private animate = (): void => {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (const p of this.particles) {
      // Update position
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse repulsion physics
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius && dist > 0) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          p.x -= (dx / dist) * force * 3.2;
          p.y -= (dy / dist) * force * 3.2;
        }
      }

      // Draw particle dot
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(56, 189, 248, ${p.baseAlpha})`;
      this.ctx.fill();
    }

    // Connect constellation lines between nearby particles
    this.connectParticles();

    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  private connectParticles(): void {
    if (!this.ctx) return;
    const count = this.particles.length;

    for (let a = 0; a < count; a++) {
      for (let b = a + 1; b < count; b++) {
        const pA = this.particles[a];
        const pB = this.particles[b];
        const dx = pA.x - pB.x;
        const dy = pA.y - pB.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const alpha = (1 - dist / 130) * 0.25;
          this.ctx.beginPath();
          this.ctx.moveTo(pA.x, pA.y);
          this.ctx.lineTo(pB.x, pB.y);
          this.ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
          this.ctx.lineWidth = 0.85;
          this.ctx.stroke();
        }
      }
    }
  }
}
