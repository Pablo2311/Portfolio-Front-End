import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  
  about:any={};
  estaLogueado:any = '';
  constructor (private AboutService: AboutService) {}

  ngOnInit () {
    this.estaLogueado = sessionStorage.getItem('token');
    this.About();
  }

  About() {
    this.AboutService.getUnAbout(1).subscribe((data) =>{
      this.about=data;
    });
  }
}
