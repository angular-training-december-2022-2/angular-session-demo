import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  @HostBinding('style.background') bgColor: string = 'transparent';
  @HostBinding('style.fontWeight') ftWeight: string = 'initial';

  constructor(private element: ElementRef) { }

  // whenever the mouse moves over the host element change the style to a new style
  @HostListener('mouseenter')
  mouseEnter(): void{
    // this.element.nativeElement.style.backgroundColor="yellow";
    // this.element.nativeElement.style.fontWeight="bold";
    this.bgColor = 'yellow';
    this.ftWeight = 'bold';

  }

  // whenever the mouse exits the host element change the style back to initial style
  @HostListener('mouseleave')
  mouseExit(): void{
    // this.element.nativeElement.style.backgroundColor="initial";
    // this.element.nativeElement.style.fontWeight="initial";
    this.bgColor = 'initial';
    this.ftWeight = 'initial';
  }
}
