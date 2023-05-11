import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExpAdminComponent } from './components/exp-admin/exp-admin.component';
import { EditExpComponent } from './components/edit-exp/edit-exp.component';
import { EduAdminComponent } from './components/edu-admin/edu-admin.component';
import { EditEduComponent } from './components/edit-edu/edit-edu.component';

const routes: Routes = [
  {path: '', redirectTo: 'sobre-mi', pathMatch: 'full'},
  {path: 'sobre-mi', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'experiencia', component: ExperienceComponent},
  {path: 'experiencia-admin', component: ExpAdminComponent},
  {path: 'editar-exp-admin/:id', component: EditExpComponent},
  {path: 'educacion', component: EducationComponent},
  {path: 'educacion-admin', component: EduAdminComponent},
  {path: 'editar-edu-admin/:id', component: EditEduComponent},
  {path: 'habilidades', component: SkillsComponent},
  {path: 'proyectos', component: ProjectsComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
