import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'users',component:UsersComponent,canActivate:[AuthGuard]},
  {path:'',component:HomeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
