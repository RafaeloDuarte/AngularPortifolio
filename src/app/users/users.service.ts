import { Injectable } from '@angular/core';
import { Usuario} from './user';

@Injectable()
export class UsersService {

  private usuarios: Usuario[] = [
    {id: 1, nome: 'Nome 01', email: 'nome01@email.com'},
    {id: 2, nome: 'Nome 02', email: 'nome02@email.com'},
    {id: 3, nome: 'Nome 03', email: 'nome03@email.com'}
  ];

  getAlunos(){
    return this.usuarios;
  }

  getAluno(id: number){
    for (let i=0; i<this.usuarios.length; i++){
      let usuario = this.usuarios[i];
      if (usuario.id == id){
        return usuario;
      }
    }
    return null;
  }

  constructor() { }

}