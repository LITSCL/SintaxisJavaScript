import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../modelos/zapatilla'; //Aquí se esta importando una clase (Zapatilla).
import { ZapatillaService } from '../servicios/zapatilla.service' //1. Aquí se esta importando un servicio.

@Component({
  selector: 'app-zapatilla',
  templateUrl: './zapatilla.component.html',
  styleUrls: ['./zapatilla.component.css'],
  providers: [ZapatillaService] //2. Aquí en providers se deben colocar los servicios que va a usar el componente.
})
export class ZapatillaComponent implements OnInit {
  public zapatillas: Array<Zapatilla>; //Este componente tiene como atributo un Array de tipo Zapatilla.
  public marcas: string[];
  public color: string;
  public miMarca: string;

  constructor(private _zapatillaService: ZapatillaService) { //Este constructor guarda zapatillas en el Array (Las instancias de servicios deben tener un guion bajo al principio del nombre "Buena practica").
    this.miMarca = "Fila";
    this.color = "Amarillo";
    this.marcas = new Array(); //Aquí se inicializa el Array.
  }

  ngOnInit(): void {
    this.zapatillas = this._zapatillaService.getZapatillas();
    this.getMarcas();
  }

  createMarca(): void {
    this.marcas.push(this.miMarca);
  }

  removeMarca(indice: number): void {
    this.marcas.splice(indice, 1); //Este método esta borrando el valor de un indice.
  }

  getMarcas(): void {
    this.zapatillas.forEach((zapatilla, index) => { //Se recorre el Array.
      if (this.marcas.indexOf(zapatilla.marca) < 0) { //Se consulta si la marca ya existe en el Array (Si ya existe la marca no se vuelve a agregar).
        this.marcas.push(zapatilla.marca); //Se agrega la marca.
      }
    });
  }

  getMiMarca(): void {
    alert(this.miMarca);
  }

  onClick(): void {
    console.log("Has entrado al input");
  }

  onBlur(): void {
    console.log("Has salido del input");
  }

  keyUpEnter(): void {
    console.log("Apretaste enter en el input");
  }

}
