import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);

  update(data: SeoData): void {
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }
    if (data.url) {
      this.meta.updateTag({ property: 'og:url', content: data.url });
      this.meta.updateTag({ property: 'og:title', content: data.title });
      this.meta.updateTag({ property: 'og:description', content: data.description });
      this.meta.updateTag({ name: 'twitter:title', content: data.title });
      this.meta.updateTag({ name: 'twitter:description', content: data.description });

      const link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
      if (link) link.href = data.url;
    }
  }
}
