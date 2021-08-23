import { Component, OnInit } from '@angular/core';
//import { ApiUsuarioService } from 'src/app/service/api-usuario.service';
import { ApiUsuarioService } from './../../service/api-usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styles: [
  ]
})
export class UsuarioListComponent implements OnInit {

  Usuario:any = [];

  constructor(private apiUsuarioService: ApiUsuarioService) {
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee(){
    this.apiUsuarioService.getEmployees().subscribe((data) => {
     this.Usuario = data;
    })
  }
/*
  removeUsuario(usuario: any, index: any) {
    if(window.confirm('Are you sure?')) {
        this.apiUsuarioService.deleteEmployee(usuario._id).subscribe((data) => {
          this.Usuario.splice(index, 1);
        }
      )
    }
  }*/

}
