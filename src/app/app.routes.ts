import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home - KS Guri - Home',
  },
  { path: 'home', component: HomeComponent, title: 'KS Guri - Home' },
  { path: 'snippets', component: HomeComponent, title: 'KS Guri - Snippets' },
  { path: 'blogs', component: HomeComponent, title: 'KS Guri - Blogs' },
];
