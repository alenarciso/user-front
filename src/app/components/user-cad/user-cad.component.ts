import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario.model';
import { MessageService } from 'src/app/service/message-service.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-user-cad',
  templateUrl: './user-cad.component.html',
  styleUrls: ['./user-cad.component.css']
})
export class UserCadComponent implements OnInit{

  constructor(private route: ActivatedRoute,private router: Router, 
    private usuarioService: UsuarioService, private messageService: MessageService) { }

  usuario : Usuario = {}
  idUsuario = 0;
  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('id')){
      this.idUsuario = Number(this.route.snapshot.paramMap.get('id'));
      this.usuarioService.getById(this.idUsuario).subscribe( resp =>{
        this.usuario = resp;
      })
    }
  }

  validarUsuario(): boolean{
    if((this.usuario.name && this.usuario.name.length > 0) && 
       (this.usuario.userName && this.usuario.userName.length > 0) &&
       (this.usuario.password && this.usuario.password.length > 0)){
        return true;
    }else{
      this.messageService.exibir('Os campos Nome, Usuário e Senha são obrigatórios!');
    }
    return false;
  }

  salvar(): void {
    if(this.validarUsuario()){
      this.usuarioService.salvar(this.usuario).subscribe(() =>{
        this.voltar();
      });
    }
  }

  voltar(): void {
    this.router.navigate(['/', 'user-list']);
  }
}
