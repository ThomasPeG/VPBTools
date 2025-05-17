import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { MachinesComponent } from './pages/machines/machines.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'machines', component: MachinesComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
