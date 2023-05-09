import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  titulo = '';
  parrafo = '';
  constructor (private http:HttpClient) {}

  ngOnInit () {
    this.http.get("https://localhost:8080/sobre-mi").subscribe((resp:any) => {
      this.titulo = resp;
      //this.parrafo = resp;
    })
  }
}
