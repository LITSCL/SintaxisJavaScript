import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; //Estos módulos son necesarios para realizar peticiones AJAX.
import { Observable } from 'rxjs';

@Injectable()
export class PeticionService {
  public url: string;

  constructor(public _http: HttpClient) { //Las instancias de servicios deben tener un guión bajo "_" al principio del nombre "Buena practica".
    this.url = "https://reqres.in/";
  }

  getUser(): Observable<any> { //En las peticiones AJAX es necesario retornar un Observable.
    return this._http.get(this.url + "api/users/2"); //Aquí es donde se realiza la petición AJAX.
  }

  addUser(usuario: any): Observable<any> { //Este método carga un dato mediante POST.
    let params = JSON.stringify(usuario);
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.url + "api/users", params, {headers: headers});
  }
}