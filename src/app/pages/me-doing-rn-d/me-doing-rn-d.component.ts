import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { marked } from 'marked';
import { switchMap, from, map } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-me-doing-rn-d',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './me-doing-rn-d.component.html',
  styleUrl: './me-doing-rn-d.component.scss',
})
export class MeDoingRnDComponent {
  markdownContent: SafeHtml | null = null;
  skinCareMarkDownContent: SafeHtml | null = null;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.http
      .get('assets/angular-architecture.md', {
        responseType: 'text',
      })
      .pipe(
        switchMap((mdText) => from(marked(mdText, { async: true }))), // convert promise to observable
        map((html) => this.sanitizer.bypassSecurityTrustHtml(html))
      )
      .subscribe((safeHtml) => {
        this.markdownContent = safeHtml;
      });

    this.http
      .get('assets/skin-care-basics.md', {
        responseType: 'text',
      })
      .pipe(
        switchMap((mdText) => from(marked(mdText, { async: true }))), // convert promise to observable
        map((html) => this.sanitizer.bypassSecurityTrustHtml(html))
      )
      .subscribe((safeHtml) => {
        this.skinCareMarkDownContent = safeHtml;
      });
  }
}
