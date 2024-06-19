import { Component } from '@angular/core';
import { SOCIAL_MEDIA_LINKS } from '../../shared/constant/social-media-links.constant';
import { SvgHighlightDirective } from '../../shared/directive/svg-highlight.directive';
import {
  KNOWLEDGE_BADGES,
  KnowledgeBadge,
} from '../../shared/constant/knowledge-badges.constant';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle, SvgHighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public socialMediaLinks = SOCIAL_MEDIA_LINKS;
  public knowledgeBadges: KnowledgeBadge[] = KNOWLEDGE_BADGES;
}
