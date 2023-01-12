import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterDTO } from 'src/app/dto/FilterDTO.model';
import { Usuario } from 'src/app/model/Usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  constructor(private service: UsuarioService, private dialog: MatDialog) { }

  usuarios: Usuario [] = [];
  filterDTO: FilterDTO = {};
  displayedColumns = ["id", "userName", "password", "isEnabled", 
  "registerDate", "name", "surName", "email", "phone", "cpf", "acoes"];

  ngOnInit(): void {
    this.filterDTO = {};
    this.filter();
  }

  clearDTO(){
    if(this.filterDTO.userName === ''){
      delete this.filterDTO.userName;
    }
    if(this.filterDTO.name === ''){
      delete this.filterDTO.name;
    }
    if(this.filterDTO.email === ''){
      delete this.filterDTO.email;
    }
  }

  filter(){
    this.clearDTO();
    this.service.filter(this.filterDTO).subscribe(resp => {
      this.usuarios = resp;
    });
  }

  excluir(id: number, nameUser: string){

    let dialogRef = this.dialog.open(DialogDeleteComponent, {
      data: { name: nameUser },
    });

    dialogRef.afterClosed().subscribe(resp =>{
      if(resp === "sim"){
        this.service.delete(id).subscribe(() =>{
            this.filter();
        });
      }
    });
  }
}
