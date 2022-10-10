import { Directive, ElementRef, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[BorderCard]'
})
export class BorderCardDirective implements OnChanges {
  @Input("BorderCard") borderType: string = "dashed"
  @Input() defaultType: string = "solid"

  constructor(private elementRef: ElementRef) {

  }
  ngOnChanges(): void {
    this.elementRef.nativeElement.style.border = `1px ${this.defaultType} gray`
    this.elementRef.nativeElement.style.borderRadius = `15px`
  }
  @HostListener("mouseover") onMouseOver() {
    this.elementRef.nativeElement.style.border = `3px ${this.defaultType} blue`
    this.elementRef.nativeElement.style.transform = "scale(1.07)"
    this.elementRef.nativeElement.style.transition = " 1s"

  }

  @HostListener("mouseout") onMouseOut() {
    this.elementRef.nativeElement.style.border = `1px ${this.defaultType} gray`
    this.elementRef.nativeElement.style.transform = "scale(1)"
    this.elementRef.nativeElement.style.transition = " 1s"



  }
}
