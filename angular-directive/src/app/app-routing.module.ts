import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './error/error.component';

import { NormalComponent } from './normal/normal.component';

import { OneclickComponent } from './oneclick/oneclick.component';



const routes: Routes = [

  {

  path:'normal',

  component:NormalComponent,

},

{

  path:'oneclick',

  component:OneclickComponent,

},

{

  path:'error',

  component:ErrorComponent,

}



];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }