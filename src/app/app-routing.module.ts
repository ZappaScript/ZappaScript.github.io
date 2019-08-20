import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectGridComponent } from './project-grid/project-grid.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {path:'home', component:ProjectGridComponent},
  {path:'about', component:AboutMeComponent, pathMatch: 'full'},
  { path: '',redirectTo: '/home',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
