import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
  {path: '', component:HomeComponent, pathMatch:"full"},
  {path: 'users', component:UsersComponent, pathMatch:"full"},
  {path: 'home', component:HomeComponent, pathMatch:"full"},
  {path: 'experience', component:ExperienceComponent, pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
