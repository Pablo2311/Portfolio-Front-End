import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationService, edu } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent implements OnInit {

  id:string='';
  eduActual: edu={institucion:'',desde:'',hasta:'',descripcion:''};
  constructor (private EduService: EducationService,
               private activated: ActivatedRoute,
               private router: Router) {}

  ngOnInit(): void {
    this.id =this.activated.snapshot.params['id'];
    this.EduService.getUnaEducacion(this.id).subscribe(
      resp=>{this.eduActual=resp},
      error=>console.log(error)
    );
  }

  editEducaciones() {
    this.EduService.editEducacion(this.id, this.eduActual).subscribe(
      resp=>{this.router.navigate(['/educacion-admin']);},
      error=>console.log(error)
    );
  }
}