import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetalheComponent } from './user-detalhe/user-detalhe.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersComponent } from './users.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {path: 'users', component: UsersComponent, 
  children : [
     {path: 'novo', component: UserFormComponent,canActivate:[AuthGuard] },
     {path: ':id', component: UserDetalheComponent,canActivate:[AuthGuard] },
     {path: ':id/editar', component: UserFormComponent,canActivate:[AuthGuard]}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
