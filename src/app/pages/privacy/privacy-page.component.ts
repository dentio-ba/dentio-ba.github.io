import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';

declare let gtag: Function;

@Component({
  selector: 'app-privacy-page',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './privacy-page.component.html',
  styleUrl: './privacy-page.component.scss',
})
export class PrivacyPageComponent implements OnInit {
  private seo = inject(SeoService);
  cookiesEnabled = true;

  ngOnInit(): void {
    this.seo.update({
      title: 'Zaštita podataka — Dentio | Data Protection & GDPR',
      description: 'Informacije o zaštiti podataka i GDPR usklađenosti za Dentio stomatološki softver. Data protection and privacy policy.',
      keywords: 'zaštita podataka, GDPR, privatnost, data protection, privacy policy, dentio',
      url: 'https://www.dentio.ba/zastita-podataka',
    });

    const stored = localStorage.getItem('dentio-cookies-enabled');
    this.cookiesEnabled = stored !== 'false';
  }

  toggleCookies(): void {
    this.cookiesEnabled = !this.cookiesEnabled;
    localStorage.setItem('dentio-cookies-enabled', String(this.cookiesEnabled));

    if (!this.cookiesEnabled) {
      // Disable GA4 tracking
      (window as any)['ga-disable-G-KYFV73CM3V'] = true;
      // Remove existing GA cookies
      this.deleteCookie('_ga');
      this.deleteCookie('_ga_KYFV73CM3V');
      this.deleteCookie('_gid');
    } else {
      // Re-enable GA4 tracking
      (window as any)['ga-disable-G-KYFV73CM3V'] = false;
      if (typeof gtag !== 'undefined') {
        gtag('config', 'G-KYFV73CM3V');
      }
    }
  }

  private deleteCookie(name: string): void {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.dentio.ba`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
}
