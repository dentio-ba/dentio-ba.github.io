import { Component, inject, OnInit } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact.component';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactComponent],
  template: `
    <div class="page-offset">
      <app-contact />
    </div>
  `,
  styles: [`.page-offset { padding-top: 80px; }`],
})
export class ContactPageComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Kontakt — Dentio | Besplatna konsultacija za stomatološki softver',
      description: 'Kontaktirajte Dentio tim za besplatnu konsultaciju. Opišite nam potrebe Vaše stomatološke ordinacije i pripremit ćemo prilagođeno softversko rješenje.',
      keywords: 'dentio kontakt, stomatološki softver kontakt, besplatna konsultacija, dental software BiH kontakt, softver za ordinaciju upit',
      url: 'https://www.dentio.ba/contact',
    });
  }
}
