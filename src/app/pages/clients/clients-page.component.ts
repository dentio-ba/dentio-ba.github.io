import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-clients-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.scss',
})
export class ClientsPageComponent {
  ts = inject(TranslateService);

  clients = [
    {
      name: 'Medico',
      location: 'Sarajevo, BiH',
      logo: 'clients/medico-logo.png',
      website: 'www.medico.ba',
      desc: { bs: 'Stomatološka ordinacija sa kompletnim desktop i web rješenjem za upravljanje pacijentima, terminima i tretmanima.', en: 'Dental practice with a complete desktop and web solution for managing patients, appointments and treatments.' },
      services: ['Desktop App', 'Web App', 'Cloud Sync', 'Email System'],
    },
  ];
}
