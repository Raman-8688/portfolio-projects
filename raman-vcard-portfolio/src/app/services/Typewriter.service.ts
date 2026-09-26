import { Injectable, signal, OnDestroy } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TypewriterService {

  displayText = signal<string>('');
  showCursor = signal<boolean>(true);

  private titles: string[] = [];
  private currentIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeout: any;
  private cursorInterval: any;

  start(titles: string[]): void {
    this.titles = titles;
    this.type();
    this.cursorInterval = setInterval(() => {
      this.showCursor.update(v => !v);
    }, 530);
  }

  stop(): void {
    clearTimeout(this.timeout);
    clearInterval(this.cursorInterval);
  }

  private type(): void {
    const current = this.titles[this.currentIndex];
    const text = this.isDeleting
      ? current.substring(0, this.charIndex - 1)
      : current.substring(0, this.charIndex + 1);

    this.displayText.set(text);

    if (this.isDeleting) this.charIndex--;
    else this.charIndex++;

    let speed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === current.length) {
      speed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.titles.length;
      speed = 400;
    }

    this.timeout = setTimeout(() => this.type(), speed);
  }
}