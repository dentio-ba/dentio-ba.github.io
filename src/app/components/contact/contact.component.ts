import { Component, inject } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

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
  sending = false;
  sendError = false;

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

    this.sending = true;
    this.sendError = false;

    const templateParams = {
      from_name: `${this.form.firstName} ${this.form.lastName}`,
      first_name: this.form.firstName,
      last_name: this.form.lastName,
      phone: this.form.phone,
      email: this.form.email,
      message: this.form.message || '—',
      time: new Date().toLocaleString('bs-BA'),
    };

    emailjs.send('service_hf6qos8', 'template_9d6cjme', templateParams, '-HIJqeDRMV-4K-cUr')
      .then(() => {
        this.sending = false;
        this.submitted = true;
        setTimeout(() => this.submitted = false, 3000);
        this.form = { firstName: '', lastName: '', phone: '', email: '', message: '' };
        this.formSubmitted = false;
        this.gdprAccepted = false;
      })
      .catch(() => {
        this.sending = false;
        this.sendError = true;
        setTimeout(() => this.sendError = false, 4000);
      });
  }
}
