import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path: '', redirectTo: 'sobre-mi', pathMatch: 'full'},
  {path: 'sobre-mi', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'experiencia', component: ExperienceComponent},
  {path: 'educacion', component: EducationComponent},
  {path: 'habilidades', component: SkillsComponent},
  {path: 'proyectos', component: ProjectsComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
