/**
 * Created by Mos on 2016/11/21.
 */
import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
    selector :'[myHighLight]'
})

export class HighlightDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
    }
}