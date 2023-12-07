import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../servicios/peticion.service'; //1. Aquí se esta importando un servicio.

@Component({
  selector: 'app-peticion',
  templateUrl: './peticion.component.html',
  styleUrls: ['./peticion.component.css'],
  providers: [PeticionService]  //2. Aquí en providers se deben colocar los servicios que va a usar el componente.
})
export class PeticionComponent implements OnInit {
  public user: string;
  public newUser: any;
  public usuarioGuardado: any;

  constructor(private _peticionService: PeticionService) { //3. Aquí se crea la instancia del servicio (Para poder utiliza sus métodos), las instancias de servicios deben tener un guión bajo "_" al principio del nombre "Buena practica".
    this.newUser = {
      name: "",
      job: ""
    };
  }

  //4. En este método se están recibiendo los datos y procesando (El método subscribe recibe dos funciones de Callback (El primero indica que hacer si la petición fue existosa, el segundo indica que hacer si la petición fue fallida)).
  ngOnInit(): void {
    this._peticionService.getUser().subscribe(result => { //El método subcribe se aplica a los objetos "Observable" y permite recibir realizar acciones en base al resultado de la petición AJAX.
      this.user = result.data;
      },
      (error) => {
        console.log(error);
    });
  }

  onSubmit(formulario): void { //Este método carga un dato mediante post (Ver en el archivo "peticion.service.ts").
    console.log(this.newUser);
    this._peticionService.addUser(this.newUser).subscribe((response) => {
        this.usuarioGuardado = response; //En este atributo se almacena el JSON retornado por POST.
        formulario.reset();
      },
      (error) => {
        console.log(error);
    });
  }

}
