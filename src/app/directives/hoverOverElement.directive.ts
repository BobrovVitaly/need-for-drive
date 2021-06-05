import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHoverOverElement]',
})

export class HoverOverElementDirective {

  @HostListener('mouseenter') onMouseEnter(): void {
    this.changeElement('white', 'green');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.changeElement('green', 'white');
  }

  constructor(private el: ElementRef<Element>) {
  }

  changeElement(replaceableStyle: string, newStyle: string): void {
    const src = this.el.nativeElement.getAttribute('src');
    if (src) {
      this.el.nativeElement.setAttribute('src', src.replace(replaceableStyle, newStyle));
    }
  }

}
