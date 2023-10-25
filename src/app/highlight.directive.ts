import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private originalColor: string = "";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.originalColor = getComputedStyle
      (this.elementRef.nativeElement).backgroundColor;
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "yellow");
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color",
     this.originalColor)
  }
}
