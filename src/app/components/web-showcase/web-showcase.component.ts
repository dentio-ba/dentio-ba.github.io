import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-web-showcase',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './web-showcase.component.html',
  styleUrl: './web-showcase.component.scss'
})
export class WebShowcaseComponent {
  features = [
    { key: 'feature1', icon: 'wizard' },
    { key: 'feature2', icon: 'list' },
    { key: 'feature3', icon: 'responsive' },
    { key: 'feature4', icon: 'form' },
  ];
}
