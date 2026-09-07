import { Component, inject } from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {
  ts = inject(TranslateService);

  stats = [
{ value: '10,000+', key: 'patients' },
    { value: '50,000+', key: 'appointments' },
    { value: '60+', key: 'services' },
    { value: '99.9%', key: 'uptime' },
    { value: '24/7', key: 'sync' },
  ];
}
