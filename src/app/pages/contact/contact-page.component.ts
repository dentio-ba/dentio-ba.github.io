import { Component } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactComponent],
  template: `
    <div class="page-offset">
      <app-contact />
    </div>
  `,
  styles: [`.page-offset { padding-top: 80px; }`],
})
export class ContactPageComponent {}
