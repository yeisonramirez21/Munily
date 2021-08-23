import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario'





@Injectable({
  providedIn: 'root'
})
export class ApiUsuarioService {

  baseUri:string = 'http://localhost:4000/api';
  //headers = new HttpHeaders().set('Content-Type', 'application/json');

  private urlEndPoint:string = 'http://localhost:4000/api';
  private httpHeaders = new HttpHeaders({'content-type': 'aplication/json'});

  constructor(private http: HttpClient) { }

  getOperadores(): Observable<Usuario[]>{
    return  this.http.get<Usuario[]>(this.urlEndPoint);
  }

  create(operador: Usuario ): Observable<Usuario>{
    let urlCreate = `${this.urlEndPoint}/create`;
    return this.http.post<Usuario>(urlCreate, operador);
  }

  //cargar datos para actualizar Operador
  getOperador(idOperador: any): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlEndPoint}/${idOperador}`);
  }



  update(operador: Usuario): Observable<Usuario>{///${operador.id}
    let urlUpdate = `${this.urlEndPoint}/update`;
    let idUser =  operador._id;
   // console.log(operador._id);
   console.log("Hola operador servicio update:", operador._id);
   console.log("Hola operador servicio update captura:", operador.name);

    return this.http.put<Usuario>(`${this.update}/update/${operador._id}`, operador);

  }


  //eliminar datos --faltaria despues de operador , (headers.httpHeaders)
  delete(idOperador: number): Observable<Usuario>{
    let urlDelete = `${this.urlEndPoint}/delete`;
    return this.http.delete<Usuario>(`${urlDelete}/${idOperador}`);
  }

   // Get all employees
   getEmployees() {
    return this.http.get(`${this.baseUri}`);
   }


}
