import { Component, inject } from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-web-showcase',
  standalone: true,
  imports: [],
  templateUrl: './web-showcase.component.html',
  styleUrl: './web-showcase.component.scss'
})
export class WebShowcaseComponent {
  ts = inject(TranslateService);

  features = [
    { key: 'feature1', icon: 'wizard' },
    { key: 'feature2', icon: 'list' },
    { key: 'feature3', icon: 'responsive' },
    { key: 'feature4', icon: 'form' },
  ];
}
