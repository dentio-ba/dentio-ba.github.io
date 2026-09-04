import { Component, inject } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  ts = inject(TranslateService);

  form = {
    name: '',
    email: '',
    clinic: '',
    message: '',
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;
    setTimeout(() => this.submitted = false, 3000);
    this.form = { name: '', email: '', clinic: '', message: '' };
  }
}
