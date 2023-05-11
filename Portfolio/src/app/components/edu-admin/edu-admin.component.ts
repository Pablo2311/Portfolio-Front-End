import { Component, OnInit } from '@angular/core';
import { EducationService, edu } from 'src/app/services/education.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edu-admin',
  templateUrl: './edu-admin.component.html',
  styleUrls: ['./edu-admin.component.css']
})
export class EduAdminComponent implements OnInit {

  lista:any=[];
  eduNueva: edu={institucion:'',desde:'',hasta:'',descripcion:''};
  constructor (private EduService: EducationService,
               private activated: ActivatedRoute) {}

  ngOnInit(): void {
    this.getEducaciones();
  }

  getEducaciones() {
    this.EduService.getEducacion().subscribe(
      resp=>{this.lista=resp;},
      error=>{console.log(error);}
    );
  }

  addEducaciones() {
    this.EduService.saveEducacion(this.eduNueva).subscribe(
      resp=>{this.ngOnInit();console.log(resp);},
      error=>{console.log(error);}
    )
  }

  deleteEducaciones(id:string) {
    this.EduService.deleteEducacion(id).subscribe(
      resp=>{this.ngOnInit();},
      error=>{console.log(error);}
    )
  }
}
