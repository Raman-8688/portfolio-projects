import React, { useEffect, useRef } from 'react';

export const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = Math.min(Math.floor(width / 16), 85);

    const mouse = {
      x: null,
      y: null,
      radius: 150
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.7;
        this.vy = (Math.random() - 0.5) * 0.7;
        this.radius = Math.random() * 2.2 + 1;
        this.baseAlpha = Math.random() * 0.45 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 3;
            this.y -= (dy / dist) * force * 3;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${this.baseAlpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const connectParticles = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* HTML5 Particle Constellation Canvas (Z-Index 0) */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.65
        }}
      />

      {/* Ambient Travelling Glowing Orbs (BEHIND CARDS: Z-Index 0) */}
      <div className="ambient-orbs-layer">
        {/* Left Outer Flank Orbs */}
        <div className="travel-orb orb-left-cyan" />
        <div className="travel-orb orb-left-pink" />
        <div className="travel-orb orb-left-purple" />

        {/* Right Outer Flank Orbs */}
        <div className="travel-orb orb-right-purple" />
        <div className="travel-orb orb-right-gold" />
        <div className="travel-orb orb-right-blue" />
      </div>

      <style>{`
        .ambient-orbs-layer {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0; /* Strictly behind all main card content */
          overflow: hidden;
        }

        .travel-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(24px);
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3);
        }

        /* ── Left Side Orbs (Anchored to Left Margin) ────────── */
        .orb-left-cyan {
          width: 140px;
          height: 140px;
          top: 18%;
          left: 2%;
          background: radial-gradient(circle at 35% 35%, #56d8ff, #0284c7 70%, #034b75);
          opacity: 0.85;
          animation: travelPhysicsLeft1 12s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
        }

        .orb-left-pink {
          width: 110px;
          height: 110px;
          top: 52%;
          left: 4%;
          background: radial-gradient(circle at 35% 35%, #ff69b4, #db2777 70%, #831843);
          opacity: 0.85;
          animation: travelPhysicsLeft2 10s cubic-bezier(0.45, 0, 0.55, 1) 1s infinite alternate;
        }

        .orb-left-purple {
          width: 90px;
          height: 90px;
          top: 74%;
          left: 1.5%;
          background: radial-gradient(circle at 35% 35%, #c084fc, #9333ea 70%, #581c87);
          opacity: 0.8;
          animation: travelPhysicsLeft3 14s cubic-bezier(0.45, 0, 0.55, 1) 2s infinite alternate;
        }

        /* ── Right Side Orbs (Anchored to Right Margin) ───────── */
        .orb-right-purple {
          width: 130px;
          height: 130px;
          top: 22%;
          right: 2%;
          background: radial-gradient(circle at 35% 35%, #a855f7, #6b21a8 70%, #3b0764);
          opacity: 0.85;
          animation: travelPhysicsRight1 11s cubic-bezier(0.45, 0, 0.55, 1) 0.5s infinite alternate;
        }

        .orb-right-gold {
          width: 105px;
          height: 105px;
          top: 58%;
          right: 3.5%;
          background: radial-gradient(circle at 35% 35%, #fbbf24, #d97706 70%, #78350f);
          opacity: 0.85;
          animation: travelPhysicsRight2 13s cubic-bezier(0.45, 0, 0.55, 1) 1.5s infinite alternate;
        }

        .orb-right-blue {
          width: 95px;
          height: 95px;
          top: 78%;
          right: 1.5%;
          background: radial-gradient(circle at 35% 35%, #38bdf8, #1d4ed8 70%, #1e3a8a);
          opacity: 0.8;
          animation: travelPhysicsRight3 9s cubic-bezier(0.45, 0, 0.55, 1) 2.5s infinite alternate;
        }

        /* ── Travelling & Floating Motion Keyframes ──────────── */
        @keyframes travelPhysicsLeft1 {
          0% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          50% {
            transform: translateY(-45px) translateX(18px) scale(1.1);
          }
          100% {
            transform: translateY(35px) translateX(-12px) scale(0.92);
          }
        }

        @keyframes travelPhysicsLeft2 {
          0% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          50% {
            transform: translateY(40px) translateX(-15px) scale(1.12);
          }
          100% {
            transform: translateY(-30px) translateX(15px) scale(0.95);
          }
        }

        @keyframes travelPhysicsLeft3 {
          0% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          50% {
            transform: translateY(-35px) translateX(12px) scale(1.08);
          }
          100% {
            transform: translateY(25px) translateX(-10px) scale(0.9);
          }
        }

        @keyframes travelPhysicsRight1 {
          0% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          50% {
            transform: translateY(50px) translateX(-20px) scale(1.12);
          }
          100% {
            transform: translateY(-40px) translateX(14px) scale(0.95);
          }
        }

        @keyframes travelPhysicsRight2 {
          0% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          50% {
            transform: translateY(-40px) translateX(16px) scale(1.15);
          }
          100% {
            transform: translateY(30px) translateX(-14px) scale(0.92);
          }
        }

        @keyframes travelPhysicsRight3 {
          0% {
            transform: translateY(0px) translateX(0px) scale(1);
          }
          50% {
            transform: translateY(35px) translateX(-12px) scale(1.08);
          }
          100% {
            transform: translateY(-25px) translateX(10px) scale(0.94);
          }
        }

        @media (max-width: 1200px) {
          .travel-orb {
            display: none; /* Hide on smaller screens to prevent overlap */
          }
        }
      `}</style>
    </>
  );
};
