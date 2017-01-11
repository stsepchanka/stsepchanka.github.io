import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[rotate]'
})

export class RotateDirective implements OnInit {
    @Input() rotate: number = 0;

    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.style.transform = `rotate(${this.rotate}deg)`;
    }
}