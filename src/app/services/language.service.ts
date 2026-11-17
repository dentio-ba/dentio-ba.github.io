import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Lang = 'bs' | 'en';

const LANG_KEY = 'dentio_lang';
const DEFAULT_LANG: Lang = 'bs';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);

  get currentLang(): Lang {
    return (this.translate.currentLang() || DEFAULT_LANG) as Lang;
  }

  init(): void {
    const saved = localStorage.getItem(LANG_KEY) as Lang | null;
    const lang = saved && (saved === 'bs' || saved === 'en') ? saved : DEFAULT_LANG;

    this.translate.use(lang);
  }

  setLang(lang: Lang): void {
    this.translate.use(lang);
    localStorage.setItem(LANG_KEY, lang);
  }

  toggleLang(): void {
    this.setLang(this.currentLang === 'bs' ? 'en' : 'bs');
  }
}
