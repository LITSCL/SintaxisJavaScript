import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router"; //Estas clases son necesarias para poder recibir parámetros desde la url.

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public lenguaje: string;
  
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.nombre = params.nombre; //Se almacena el dato redibido desde la URL en el atributo (Se usa el nombre del parámetro definido en "app.routing.ts").
      this.lenguaje = params.lenguaje;
    });
  }

  redirigir(): void {
    this.router.navigate(['/zapatilla']); //El método navigate recibe como parámetro una dirección URL del router y permite redirigir a dicha URL de forma reactiva.
  }
}
