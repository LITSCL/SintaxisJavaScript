import { Component } from '@angular/core';
import { configuracion } from './archivos/configuracion'; //Aquí se esta importanto una variable que contiene un objeto JSON.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Aangular';
  public menu: boolean = true;
  public config: { title: string; color: string; background: string; };

  constructor() {
   this.config = configuracion; //Guardando el objeto JSON en un atributo de la clase.
   this.title = this.config.title; //Accediendo al dato que almacena el atributo del objeto importado.
  }

  ocultarMostrarMenu(valor: boolean): void {
    this.menu = valor;
  }

}
