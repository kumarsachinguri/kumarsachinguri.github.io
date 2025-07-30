import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { MeDoingRnDComponent } from './pages/me-doing-rn-d/me-doing-rn-d.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'KS Guri - Home',
  },
  { path: 'home', component: HomeComponent, title: 'KS Guri - Home' },
  {
    path: 'medoingrnd',
    component: MeDoingRnDComponent,
    title: 'KS Guri - R & D',
  },
  { path: 'snippets', component: HomeComponent, title: 'KS Guri - Snippets' },
  {
    path: 'policy',
    component: PolicyComponent,
    title: 'KS Guri - Privacy Policy',
  },
];
