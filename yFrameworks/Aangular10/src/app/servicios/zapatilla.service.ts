//Esto es un ejemplo no real de un servicio (La idea de los servicios es consultar un backend y enviar datos a un componente).

import { Injectable } from '@angular/core'; //Esta clase contiene métodos que permiten injectar un componente como dependencia en otras clases y componentes.
import { Zapatilla } from '../modelos/zapatilla'

@Injectable() //Injectable es un decorador (Añade funcionalidades a la clase de abajo).
export class ZapatillaService {
  public zapatillas: Array<Zapatilla>; //Este componente tiene como atributo un Array de tipo Zapatilla.

  constructor() {
    this.zapatillas = [
        new Zapatilla("Classic", "Rebook", "Blanco", 80, true),
        new Zapatilla("Runner", "Nike", "Naranjo", 60, true),
        new Zapatilla("Yezzy", "Adidas", "Amarillo", 180, false),
        new Zapatilla("Enduro", "Salomon", "Azul", 70, false),
        new Zapatilla("Outbond", "Salomon", "Rojo", 200, true)
        ];
  }

  getZapatillas(): Array<Zapatilla> {
    return this.zapatillas;
  }
}
