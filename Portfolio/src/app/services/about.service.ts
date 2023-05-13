import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  url='http://localhost:8080/sobre-mi'
  constructor(private http:HttpClient) { }

  getAbout():Observable<any>{
    return this.http.get(this.url);
  }

  getUnAbout(id: string):Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  saveAbout(About: sobre):Observable<any>{
    return this.http.post(this.url+'/crear', About, {responseType:'text'});
  }

  editAbout(id: string, About: sobre):Observable<any>{
    return this.http.put(this.url+'/editar/'+id, About, {responseType:'text'});
  }

  deleteAbout(id: string):Observable<any>{
    return this.http.delete(this.url+'/borrar/'+id, {responseType:'text'});
  }
}

export interface sobre {
  titulo:string;
  parrafo:String;
}