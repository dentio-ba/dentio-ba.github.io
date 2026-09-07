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
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  };

  submitted = false;
  formSubmitted = false;
  gdprAccepted = false;
  showPrivacy = false;

  get phoneValid(): boolean {
    return /^[0-9+\s\-]{6,15}$/.test(this.form.phone);
  }

  get emailValid(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email);
  }

  acceptPrivacy() {
    this.gdprAccepted = true;
    this.showPrivacy = false;
  }

  onSubmit() {
    this.formSubmitted = true;

    if (!this.form.firstName || !this.form.lastName || !this.form.phone || !this.form.email) return;
    if (!this.phoneValid || !this.emailValid) return;
    if (!this.gdprAccepted) return;

    this.submitted = true;
    setTimeout(() => this.submitted = false, 3000);
    this.form = { firstName: '', lastName: '', phone: '', email: '', message: '' };
    this.formSubmitted = false;
    this.gdprAccepted = false;
  }
}
