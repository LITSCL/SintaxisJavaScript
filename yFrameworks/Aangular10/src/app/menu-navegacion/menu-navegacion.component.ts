import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core'; //OnInit, DoCheck y OnDestroy son interfaces.

@Component({
  selector: 'app-menu-navegacion',
  templateUrl: './menu-navegacion.component.html',
  styleUrls: ['./menu-navegacion.component.css']
})
export class MenuNavegacionComponent implements OnInit, DoCheck, OnDestroy { //Aquí se están implementando las interfaces (Es obligatorio añadir sus constructores).
  public titulo: string = "Titulo";
  public contador: number = 0;

  constructor() {
  }

  ngOnInit(): void { //Este método hook se ejecuta cada vez que se carga el componente, "Cuando se inicia su ciclo de vida" (Cuando se carga la etiqueta selectora en la vista "app.component.html").
    console.log("OnInit() MenuNavegacionComponent (Componente cargado).");
  }

  ngDoCheck(): void { //Este método hook se ejecuta cada vez que ocurre un cambio en el componente.
    console.log("DoCheck() MenuNavegacionComponent (Componente modificado).");
  }

  ngOnDestroy(): void { //Este método hook se ejecuta cuando se elimina la instancia del componente, "Cuando se termina el ciclo de vida del componente" (Cuando se borra una etiqueta en la vista "app.component.html").
    console.log("OnDestroy() MenuNavegacionComponent (Componente destriudo).");
  }

  cambiarTitulo(): void { //Este método simplemente genera un cambio en el componente.
    this.contador++;
    if (this.contador%2 == 0) {
      this.titulo = "Titulo";
    }
    else {
      this.titulo = "Nuevo Titulo";
    }
  }

}
