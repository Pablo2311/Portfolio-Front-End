import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  
  lista:any=[];
  constructor (private AboutService: AboutService) {}

  ngOnInit () {
    this.About();
  }

  About() {
    this.AboutService.getAbout().subscribe(
      resp=>{this.lista=resp;},
      error=>{console.log(error);}
    );
  }
}
