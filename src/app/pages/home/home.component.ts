import { Component } from '@angular/core';
import { SOCIAL_MEDIA_LINKS } from '../../shared/constant/social-media-links.constant';
import { SvgHighlightDirective } from '../../shared/directive/svg-highlight.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SvgHighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public socialMediaLinks = SOCIAL_MEDIA_LINKS;
}
