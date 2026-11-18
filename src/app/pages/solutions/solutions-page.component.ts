import { Component, inject, OnInit } from '@angular/core';
import { DesktopShowcaseComponent } from '../../components/desktop-showcase/desktop-showcase.component';
import { WebShowcaseComponent } from '../../components/web-showcase/web-showcase.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-solutions-page',
  standalone: true,
  imports: [DesktopShowcaseComponent, WebShowcaseComponent],
  template: `
    <app-desktop-showcase />
    <app-web-showcase />
  `,
  styles: [`:host ::ng-deep #desktop { padding-top: 180px; }`],
})
export class SolutionsPageComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Dentio Rješenja — Desktop i Web aplikacija za stomatologiju',
      description: 'Pogledajte Dentio desktop i web rješenja za stomatološke ordinacije — upravljanje pacijentima, kalendar termina, online zakazivanje, cloud sinhronizacija i više.',
      keywords: 'dentio rješenja, desktop aplikacija stomatologija, web aplikacija zubar, stomatološki softver funkcionalnosti, online zakazivanje termina, dental software features',
      url: 'https://www.dentio.ba/solutions',
    });
  }
}
