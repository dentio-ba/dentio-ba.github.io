import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  ts = inject(TranslateService);
}
