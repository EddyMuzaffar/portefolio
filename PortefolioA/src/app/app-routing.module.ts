import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProjectComponent } from './component/project/project.component';
import {IntroComponent} from "./component/intro/intro.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'HomePage' }
},
{
  path: 'project',
  component: ProjectComponent,
  data: { animation: 'ProjectPage' }
},
{
    path: '',
  component: IntroComponent,
  data :{animation : 'IntroPage'}
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
