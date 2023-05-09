import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  lista:any=[];
  constructor (private ExpService: ExperienceService) {}

  ngOnInit(): void {
    this.experiencias();
  }

  experiencias() {
    this.ExpService.getExperiencia().subscribe(
      resp=>{this.lista=resp;},
      error=>{console.log(error);}
    );
  }
}
