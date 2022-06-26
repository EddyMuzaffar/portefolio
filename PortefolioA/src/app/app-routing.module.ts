import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProjectComponent } from './component/project/project.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
},
{
  path: 'project',
  component: ProjectComponent
},
{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
},
{
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
