import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  { path: 'home', component: HomeComponent },
  { path: 'snippets', component: HomeComponent },
  { path: 'blogs', component: HomeComponent },
];
