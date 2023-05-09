import { Component, OnInit } from '@angular/core';
import { ExperienceService, exp } from 'src/app/services/experience.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exp-admin',
  templateUrl: './exp-admin.component.html',
  styleUrls: ['./exp-admin.component.css']
})
export class ExpAdminComponent implements OnInit {

  lista:any=[];
  expNueva: exp={empleador:'',desde:'',hasta:'',puesto:'',descripcion:''};
  constructor (private ExpService: ExperienceService,
               private activated: ActivatedRoute) {}

  ngOnInit(): void {
    this.getExperiencias();
  }

  getExperiencias() {
    this.ExpService.getExperiencia().subscribe(
      resp=>{this.lista=resp;},
      error=>{console.log(error);}
    );
  }

  addExperiencias() {
    this.ExpService.saveExperiencia(this.expNueva).subscribe(
      resp=>{this.ngOnInit();console.log(resp);},
      error=>{console.log(error);}
    )
  }

  deleteExperiencias(id:string) {
    this.ExpService.deleteExperiencia(id).subscribe(
      resp=>{this.ngOnInit();},
      error=>{console.log(error);}
    )
  }
}
