import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'http://localhost:3900/api/';

  constructor(private http:HttpClient) { }

  getUsuarios(){
    return this.http.get(`${this.url}usuarios`);
  }

  getPaises(){
    return this.http.get(`${this.url}usuarios`);
  }


  getEditUsuario(id:string){

  }

  setCreateUsuario(usuario){
      let datos = JSON.stringify(usuario);
      let headers = new HttpHeaders().set('Content-Type','application/json');

      return this.http.post(`${this.url}nuevousuario`, datos , {headers:headers});
  }

  deleteUser(id:string){
      console.log('llamando metodo borrar user desde el servicio');
  }

}
