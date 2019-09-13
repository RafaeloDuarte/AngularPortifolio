import { Usuario } from './user';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado:boolean = false

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router:Router) { }

  fazerLogin(user: Usuario){
    if(user.nome === 'user' && user.senha === '1'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/']);
    }else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  fazerCadastro(user: Usuario){
    console.log(user.nome)
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }

}
