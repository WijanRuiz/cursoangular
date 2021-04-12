/* tslint:disable */
import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter')
  highlight(){
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  unhighlight(){
    this.el.nativeElement.style.backgroundColor = '';
  }
}
