import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  url='http://localhost:8080/educacion'
  constructor(private http:HttpClient) { }

  getEducacion():Observable<any>{
    return this.http.get(this.url);
  }

  getUnaEducacion(id: string):Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  saveEducacion(Educacion: edu):Observable<any>{
    return this.http.post(this.url+'/crear', Educacion, {responseType:'text'});
  }

  editEducacion(id: string, Educacion: edu):Observable<any>{
    return this.http.put(this.url+'/editar/'+id, Educacion, {responseType:'text'});
  }

  deleteEducacion(id: string):Observable<any>{
    return this.http.delete(this.url+'/borrar/'+id, {responseType:'text'});
  }
}

export interface edu {
  institucion:string;
  desde:String;
  hasta:String;
  descripcion:string;
}
