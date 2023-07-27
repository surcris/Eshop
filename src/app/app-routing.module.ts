import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngHomeComponent } from './ang-home/ang-home.component';
import { AngArticlesComponent } from './ang-articles/ang-articles.component';

const routes: Routes = [
  
  {
    path:"home",
    component:AngHomeComponent
  },
  {
    path:"articles",
    component:AngArticlesComponent
  },
  {
    path:"",
    component:AngHomeComponent
  },
  {
    path: "**",
    redirectTo:"home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
