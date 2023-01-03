import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterDTO } from '../dto/FilterDTO.model';
import { Usuario } from '../model/Usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = 'https://user-back-production.up.railway.app//user';

 //baseUrl = 'https://desafio-euax-backend.herokuapp.com/projeto';

  constructor(private http: HttpClient) { }

  salvar(usuario: Usuario): Observable<any>{
    return this.http.post<Usuario>(this.baseUrl+'/save', usuario);
  }

  delete(id: number): Observable<any>{
    const url = `${this.baseUrl}/delete/${id}`
    return this.http.get<Usuario>(url);
  }

  filter(filterDTO: FilterDTO): Observable<Usuario[]>{
    return this.http.post<Usuario[]>(this.baseUrl+"/filter", filterDTO);
  }

  getById(id: number): Observable<Usuario>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Usuario>(url);
  }

}