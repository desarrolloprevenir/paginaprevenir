import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const apiUrl = 'http://cdn.prevenirexpress.com:3000';


 // API LOCAL
  // public apiUrl = 'http://192.168.2.104:3000';

  // API DEL CIELO
 // public apiUrl = 'http://cdn.prevenirexpress.com:3000';

  // API MAC
  //  public apiUrl = 'http://192.168.2.105:3000';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {

   }


   postFormulario(info){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(apiUrl + '/emails', info, { headers: headers });
   }

   postFotos(fotos){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(apiUrl + '/fotosp', fotos, { headers: headers })
   }

   getDepartamentos(){
     return this.http.get(apiUrl + '/departamentos/47', {headers});
   }

   getMunicipios(id){
    return this.http.get(apiUrl + '/municipios/' + id);
  }

  getFotos(){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(apiUrl + '/verfotof');
  }


}
