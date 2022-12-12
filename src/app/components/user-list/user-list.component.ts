import { Component } from '@angular/core';
import { FilterDTO } from 'src/app/dto/FilterDTO.model';
import { Usuario } from 'src/app/model/Usuario.model';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  constructor(private service: UsuarioService) { }

  usuarios: Usuario [] = [];
  filterDTO: FilterDTO = {};
  displayedColumns = ["id", "userName", "password", "isEnabled", 
  "registerDate", "name", "surName", "email", "phone", "acoes"];

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

  excluir(id: number){
    this.service.delete(id).subscribe(() =>{
        this.filter();
    });
  }
}
