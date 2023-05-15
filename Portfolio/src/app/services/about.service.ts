import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  url='https://portfolio-cxxs.onrender.com/sobre-mi'
  constructor(private http:HttpClient) { }

  getAbout():Observable<any>{
    return this.http.get(this.url);
  }

  getUnAbout(id: number):Observable<any>{
    return this.http.get(this.url+'/'+id);
  }

  saveAbout(About: sobre):Observable<any>{
    return this.http.post(this.url+'/crear', About, {responseType:'text'});
  }

  editAbout(id: number, About: sobre):Observable<any>{
    return this.http.put(this.url+'/editar/'+id, About, {responseType:'text'});
  }

  deleteAbout(id: number):Observable<any>{
    return this.http.delete(this.url+'/borrar/'+id, {responseType:'text'});
  }
}

export interface sobre {
  titulo:string;
  parrafo:String;
}