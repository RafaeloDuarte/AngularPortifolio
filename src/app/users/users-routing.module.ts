import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetalheComponent } from './user-detalhe/user-detalhe.component';
import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [
  {path:'users/detatils',component:UserDetalheComponent},
  {path:'users/form',component:UserFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
