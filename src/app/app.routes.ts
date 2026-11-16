import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { SolutionsPageComponent } from './pages/solutions/solutions-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { ClientsPageComponent } from './pages/clients/clients-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'solutions', component: SolutionsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'clients', component: ClientsPageComponent },
  { path: '**', redirectTo: '' },
];
