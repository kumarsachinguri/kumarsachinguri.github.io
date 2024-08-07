import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[svgHighLight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
  standalone: true,
})
export class SvgHighlightDirective {
  @Input('svgHighLight') highlightColor: string = '#ddd';
  private _defaultColor = '#ddd';
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  onMouseEnter() {
    this.highlight(this.highlightColor || this._defaultColor);
  }
  onMouseLeave() {
    this.highlight(this._defaultColor);
  }

  private highlight(color: string) {
    this.el.style.fill = color;
  }
}
