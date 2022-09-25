import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {
  @Input('LightBox') highLightColor: string = "yellow";
  @Input() defaultColor: string = "";
  constructor(private elemRef: ElementRef) {
  }

  ngOnChanges (): void {
    this.elemRef.nativeElement.style.border = `10px solid ${this.defaultColor}`;
  }

  @HostListener('mouseover') onMouseOver() {
    this.elemRef.nativeElement.style.border = `10px solid ${this.highLightColor}`;
  }
  @HostListener('mouseout') onMouseOut() {
    this.elemRef.nativeElement.style.border = `10px solid ${this.defaultColor}`;
  }
}
