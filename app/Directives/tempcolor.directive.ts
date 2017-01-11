import { Directive, ElementRef, OnInit, Input } from '@angular/core';

class TempColor {
    temp: number;
    color: number;
    constructor(temp: number, color: number) {
        this.temp = temp;
        this.color = color;
    }
}

@Directive({
  selector: '[tempColor]'
})

export class TempcolorDirective implements OnInit {
    @Input() tempColor: number;

    constructor(private el: ElementRef) {}

    ngOnInit() {
        let color: number;

        if (this.tempColor < 0) {
           color = Math.max(0xFF + this.tempColor * 0x5, 0x30);
        } else {
            color = 0xFF0000 + Math.max(0x0, 0x60 - this.tempColor * 0x3)*0x100 - Math.min(0, 0x60 - this.tempColor * 0x3);
        }

        this.el.nativeElement.style.color = ('0000' + color.toString(16)).slice(-6);
    }
}