import { Component, inject, signal, AfterViewInit, OnDestroy, NgZone, ElementRef, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements AfterViewInit, OnDestroy {
  ts = inject(TranslateService);
  private zone = inject(NgZone);
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;
  private animated = false;

  stats = [
    { target: 10000, suffix: '+', key: 'patients', duration: 2000 },
    { target: 50000, suffix: '+', key: 'appointments', duration: 2200 },
    { target: 60, suffix: '+', key: 'services', duration: 1800 },
    { target: 99.9, suffix: '%', key: 'uptime', duration: 1800, decimal: true },
    { target: 0, suffix: '', key: 'sync', duration: 0, static: '24/7' },
  ];

  counters = this.stats.map(s => signal(s.static ?? '0'));

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !this.animated) {
            this.animated = true;
            this.startCounters();
            this.observer?.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      this.observer.observe(this.el.nativeElement);
    });
  }

  private startCounters() {
    this.stats.forEach((s, i) => {
      if (s.static) return;
      this.animateCounter(0, s.target, s.duration, this.counters[i], s.suffix, s.decimal);
    });
  }

  private animateCounter(
    from: number, to: number, duration: number,
    target: ReturnType<typeof signal<string>>,
    suffix: string, decimal = false
  ) {
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * eased;
      const display = decimal
        ? current.toFixed(1)
        : Math.round(current).toLocaleString();
      target.set(display + suffix);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
