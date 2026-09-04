import { Component } from '@angular/core';
import { DesktopShowcaseComponent } from '../../components/desktop-showcase/desktop-showcase.component';
import { WebShowcaseComponent } from '../../components/web-showcase/web-showcase.component';

@Component({
  selector: 'app-solutions-page',
  standalone: true,
  imports: [DesktopShowcaseComponent, WebShowcaseComponent],
  template: `
    <app-desktop-showcase />
    <app-web-showcase />
  `,
  styles: [`:host ::ng-deep #desktop { padding-top: 180px; }`],
})
export class SolutionsPageComponent {}
