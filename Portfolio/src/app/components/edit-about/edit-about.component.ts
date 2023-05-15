import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutService, sobre } from 'src/app/services/about.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  id:number=1; 
  about: sobre={titulo:'',parrafo:''};
  constructor (private aboutService: AboutService,
               private activated: ActivatedRoute,
               private router: Router) {}

  ngOnInit(): void {
    this.id =this.activated.snapshot.params['id'];
    this.aboutService.getUnAbout(this.id).subscribe(
      resp=>{this.about=resp},
      error=>console.log(error)
    );
  }

  editAbout() {
    this.aboutService.editAbout(this.id, this.about).subscribe(
      resp=>{this.router.navigate(['/sobre-mi']);},
      error=>console.log(error)
    );
  }
}