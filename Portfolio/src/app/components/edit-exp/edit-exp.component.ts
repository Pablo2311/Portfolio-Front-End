import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienceService, exp } from 'src/app/services/experience.service';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  id:string='';
  expActual: exp={empleador:'',desde:'',hasta:'',puesto:'',descripcion:''};
  constructor (private ExpService: ExperienceService,
               private activated: ActivatedRoute,
               private router: Router) {}

  ngOnInit(): void {
    this.id =this.activated.snapshot.params['id'];
    this.ExpService.getUnaExperiencia(this.id).subscribe(
      resp=>{this.expActual=resp},
      error=>console.log(error)
    );
  }

  editExperiencias() {
    this.ExpService.editExperiencia(this.id, this.expActual).subscribe(
      resp=>{this.router.navigate(['/experiencia-admin']);},
      error=>console.log(error)
    );
  }
}
