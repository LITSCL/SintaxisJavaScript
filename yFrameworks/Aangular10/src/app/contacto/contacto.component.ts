import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../modelos/contacto.usuario';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario;
  public nombre: string;

  constructor() {
    this.usuario = new ContactoUsuario("", "", "", "");
   }

  ngOnInit(): void {
  }

  onSubmit(formulario: any): void {
    console.log(this.usuario);
    formulario.reset(); //Aquí se borran los datos de los inputs del formulario (También se borran los datos del objeto "Two-Way data binding") Si se resetea el formulario y se quieren persistir los datos, los datos se deben almacenar en alguna variable.
    console.log(this.usuario);
  }

}
