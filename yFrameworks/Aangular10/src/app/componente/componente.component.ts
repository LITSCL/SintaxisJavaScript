import { Component, OnInit } from '@angular/core'; //Todos los componentes necesitan importar la clase "Component".

@Component({
  selector: 'app-componente', //El valor de esta variable indica el nombre de la etiqueta que permite seleccionar el componente en la vista.
  templateUrl: './componente.component.html', //El valor de esta variable indica la dirección en donde se encuentra la vista del componente.
  styleUrls: ['./componente.component.css'] //El valor de esta variable indica la dirección en donde se encuentra la hoja de estilos del componente.
})
export class ComponenteComponent implements OnInit { //Al crear una interfaz mediante CLI, se le implementa a la clase la interfaz OnInit (Al implementarse esta interfaz, es necesario crear el método "ngOnInit()").
  public titulo: string = "Mi primer componente"; //Atributo de la clase (Del componente).
  constructor() {
  }

  ngOnInit(): void { //Este método (Este tipo de métodos son Hooks) se ejecuta cuando se carga el componente (Se crea automaticamente si se crea el componente mediante CLI).
  }

}
