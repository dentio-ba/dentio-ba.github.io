import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-clients-page',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.scss',
})
export class ClientsPageComponent {
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
}
