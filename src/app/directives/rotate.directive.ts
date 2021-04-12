/* tslint:disable */
import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[rotate]'
})
export class RotateDirective {

  // @ts-ignore
  @Input() step: number;
  // @ts-ignore
  @Input() rotate: number;

  @HostListener("click", ['$event'])
  onClick(event: PointerEvent) {
    let stepNum = this.step ? this.step : 10;
    let degrees = event.shiftKey ? stepNum * (-1) : stepNum;
    this.rotate = this.rotate ? this.rotate + degrees : this.rotate + degrees;
    this.rotateElement();
  }

  spin(){
    this.increaseDegrees();
    this.rotateElement();
  }

  increaseDegrees(){
    let degrees = this.step ? this.step : 1;
    this.rotate = this.rotate ? this.rotate + degrees : this.rotate + degrees;
  }

  rotateElement(){
    this.el.nativeElement.style.transform = `rotate(${this.rotate}deg)`;
  }
  constructor(private el: ElementRef) {
    // @ts-ignore
    this.rotateElement();
  }

  ngOnInit(): void {
    this.rotateElement();
    setInterval(() => this.spin(), 100)
  }
}
