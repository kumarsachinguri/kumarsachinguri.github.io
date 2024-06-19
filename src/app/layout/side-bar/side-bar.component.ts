import { NgClass, NgStyle } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SOCIAL_MEDIA_LINKS } from '../../shared/constant/social-media-links.constant';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [NgClass, NgStyle, RouterLink, RouterLinkActive],
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

  public socialMediaLinks = SOCIAL_MEDIA_LINKS;

  public closeSideNav() {
    this.onToggle.emit();
  }
}
