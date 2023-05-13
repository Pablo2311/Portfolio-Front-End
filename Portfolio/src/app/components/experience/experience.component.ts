import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  lista:any=[];
  estaLogueado:any = '';
  constructor (private ExpService: ExperienceService) {}

  ngOnInit(): void {
    this.estaLogueado = sessionStorage.getItem('token');
    this.experiencias();
  }

  experiencias() {
    this.ExpService.getExperiencia().subscribe(
      resp=>{this.lista=resp;},
      error=>{console.log(error);}
    );
  }
}
