import { Directive, ElementRef } from '@angular/core'; //El módulo "ElementRef" permite hacer una referencia de un elemento del DOM.

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  public elemento: any;

  constructor(el: ElementRef) { 
    this.elemento = el.nativeElement;
    
    this.elemento.style.background = "blue";
    this.elemento.style.color = "white";
    this.elemento.style.fontSize = "20px";
  }

}
