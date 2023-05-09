import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  url='http://localhost:8080/experiencia'
  constructor(private http:HttpClient) { }

  getExperiencia():Observable<any>{
    return this.http.get(this.url);
  }

  getUnaExperiencia(id: string):Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  saveExperiencia(Experience: exp):Observable<any>{
    return this.http.post(this.url+'/crear', Experience, {responseType:'text'});
  }

  editExperiencia(id: string, Experience: exp):Observable<any>{
    return this.http.put(this.url+'/editar/'+id, Experience, {responseType:'text'});
  }

  deleteExperiencia(id: string):Observable<any>{
    return this.http.delete(this.url+'/borrar/'+id, {responseType:'text'});
  }
}

export interface exp {
  empleador:string;
  desde:String;
  hasta:String;
  puesto:string;
  descripcion:string;
}
