import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [NgClass, RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  @Output() onToggle: EventEmitter<boolean> = new EventEmitter();
  public routes: { label: string; icon: string; route: string }[] = [
    { label: 'Home', icon: '#icon-home', route: '/home' },
    { label: 'Snippets', icon: '#icon-code', route: '/snippets' },
    { label: 'Blogs', icon: '#icon-edit', route: '/blogs' },
  ];

  public socialMediaLinks: {
    label: string;
    icon: string;
    route: string;
    class?: string;
  }[] = [
    {
      label: 'Instagram',
      icon: '#icon-instagram',
      route: 'https://www.instagram.com/kumarsachinguri/',
      class: 'insta',
    },
    {
      label: 'Github',
      icon: '#icon-github',
      route: 'https://github.com/kumarsachinguri',
      class: 'github',
    },
    {
      label: 'Twitter',
      icon: '#icon-twitter',
      route: 'https://x.com/kumarsachinguri',
      class: 'twitter',
    },
    {
      label: 'LinkedIn',
      icon: '#icon-linkedin',
      route: 'https://www.linkedin.com/in/kumarsachinguri/',
      class: 'linkedIn',
    },
  ];

  public closeSideNav() {
    this.onToggle.emit();
  }
}
