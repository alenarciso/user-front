import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario.model';
import { MessageService } from 'src/app/service/message-service.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { DialogMessageComponent } from '../dialog-message/dialog-message.component';

@Component({
  selector: 'app-user-cad',
  templateUrl: './user-cad.component.html',
  styleUrls: ['./user-cad.component.css']
})
export class UserCadComponent implements OnInit{

  constructor(private route: ActivatedRoute,private router: Router, 
    private usuarioService: UsuarioService, private messageService: MessageService,
    private dialog: MatDialog) { }

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
 
  salvar(): void {
   let messages = [];
     this.usuarioService.salvar(this.usuario).subscribe(() =>{
      this.voltar();
     }, err =>{
      messages = err.error.errors;
      this.message(messages);
     });
  }

  message(messages: string[]): void{
    this.dialog.open(DialogMessageComponent, {
      data: { messages: messages },
    });
  }

  voltar(): void {
    this.router.navigate(['/', 'user-list']);
  }
}
