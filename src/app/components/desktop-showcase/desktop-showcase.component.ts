import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-desktop-showcase',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './desktop-showcase.component.html',
  styleUrl: './desktop-showcase.component.scss'
})
export class DesktopShowcaseComponent {
  lang = inject(LanguageService);

  features = [
    { key: 'feature1', icon: 'cards' },
    { key: 'feature2', icon: 'doctors' },
    { key: 'feature3', icon: 'services' },
    { key: 'feature4', icon: 'offline' },
  ];
}
