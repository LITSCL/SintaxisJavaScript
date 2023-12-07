import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public identificado: boolean;

  constructor() { 
    this.identificado = false;
  }

  ngOnInit(): void {
  }

  setIdentificado(): void {
    this.identificado = true;
  }

}
