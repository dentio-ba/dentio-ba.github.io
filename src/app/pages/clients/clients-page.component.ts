import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-clients-page',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.scss',
})
export class ClientsPageComponent implements OnInit {
  private seo = inject(SeoService);

  clients = [
    {
      name: 'Medico',
      location: 'Sarajevo, BiH',
      logo: 'clients/medico-logo.png',
      website: 'www.medico.ba',
      descKey: 'clients.medico_desc',
      services: ['Desktop App', 'Web App', 'Cloud Sync', 'Email System'],
    },
    {
      name: 'SS Dental',
      location: 'Konjic, BiH',
      logo: 'clients/ssdental-logo.png',
      website: 'www.ssdental.ba',
      descKey: 'clients.ssdental_desc',
      services: ['Web App', 'Email System', 'Cloud Sync'],
    },
  ];

  ngOnInit(): void {
    this.seo.update({
      title: 'Klijenti — Dentio | Stomatološke ordinacije koje koriste Dentio',
      description: 'Pogledajte stomatološke ordinacije u BiH koje koriste Dentio softver za upravljanje pacijentima, terminima i tretmanima.',
      keywords: 'dentio klijenti, stomatološke ordinacije BiH, dental software klijenti, Medico ordinacija, SS Dental Konjic',
      url: 'https://www.dentio.ba/clients',
    });
  }
}
