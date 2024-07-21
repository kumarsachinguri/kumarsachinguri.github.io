import { Component } from '@angular/core';
import { SOCIAL_MEDIA_LINKS } from '../../shared/constant/social-media-links.constant';
import { SvgHighlightDirective } from '../../shared/directive/svg-highlight.directive';
import {
  KNOWLEDGE_BADGES,
  KnowledgeBadge,
} from '../../shared/constant/knowledge-badges.constant';
import { NgStyle } from '@angular/common';
import { Project } from '../../shared/interfaces/project.model';
import { PROJECTS } from '../../shared/constant/projects.constant';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgStyle, SvgHighlightDirective, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public socialMediaLinks = SOCIAL_MEDIA_LINKS;
  public knowledgeBadges: KnowledgeBadge[] = KNOWLEDGE_BADGES;
  public projects: Project[] = PROJECTS;

  public hireForm: FormGroup = new FormGroup({
    fullName: new FormControl<string>('', [Validators.required]),
    emailAddress: new FormControl<string>('', [Validators.email]),
    message: new FormControl<string>('', Validators.required),
    requirements: new FormControl<string>(''),
  });

  public sendMesage() {
    if (this.hireForm.valid) {
    }
  }
}
