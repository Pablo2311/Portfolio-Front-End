import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  lista:any=[];
  constructor (private EduService: EducationService) {}

  ngOnInit(): void {
    this.educaciones();
  }

  educaciones() {
    this.EduService.getEducacion().subscribe(
      resp=>{this.lista=resp;},
      error=>{console.log(error);}
    );
  }
}
