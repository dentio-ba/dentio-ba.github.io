import { Component, inject } from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-desktop-showcase',
  standalone: true,
  imports: [],
  templateUrl: './desktop-showcase.component.html',
  styleUrl: './desktop-showcase.component.scss'
})
export class DesktopShowcaseComponent {
  ts = inject(TranslateService);

  features = [
    { key: 'feature1', icon: 'cards' },
    { key: 'feature2', icon: 'doctors' },
    { key: 'feature3', icon: 'services' },
    { key: 'feature4', icon: 'offline' },
  ];
}
