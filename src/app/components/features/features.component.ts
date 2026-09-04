import { Component, inject } from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  ts = inject(TranslateService);

  features = [
    { key: 'patients', icon: 'people' },
    { key: 'odontogram', icon: 'tooth' },
    { key: 'calendar', icon: 'calendar' },
    { key: 'booking', icon: 'booking' },
    { key: 'sync', icon: 'sync' },
    { key: 'email', icon: 'email' },
    { key: 'treatments', icon: 'treatment' },
    { key: 'security', icon: 'security' },
  ];
}
