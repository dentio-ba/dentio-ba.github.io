import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features = [
    { key: 'patients', icon: 'people' },
    { key: 'odontogram', icon: 'tooth' },
    { key: 'calendar', icon: 'calendar' },
    { key: 'booking', icon: 'booking' },
    { key: 'sync', icon: 'sync' },
    { key: 'email', icon: 'email' },
    { key: 'treatments', icon: 'treatment' },
    { key: 'security', icon: 'security' },
    { key: 'reports', icon: 'reports' },
    { key: 'admin', icon: 'admin' },
    { key: 'appointments', icon: 'appointments' },
    { key: 'documents', icon: 'documents' },
  ];
}
