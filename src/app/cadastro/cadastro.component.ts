import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Usuario } from '../login/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  private user:Usuario = new Usuario;

  constructor(private authService:AuthService) { }
  
  ngOnInit() {
  }
  
  fazerCadastro(){
    this.authService.fazerCadastro(this.user)
  }
}
