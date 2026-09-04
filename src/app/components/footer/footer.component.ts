import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  ts = inject(TranslateService);
  year = new Date().getFullYear();
}
