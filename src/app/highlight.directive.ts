import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private originalColor: string = "";

  @Input()
  color : string = "yellow";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.originalColor = getComputedStyle
      (this.elementRef.nativeElement).backgroundColor;
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", this.color);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color",
     this.originalColor)
  }
}
