import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario'
import { ApiUsuarioService } from 'src/app/service/api-usuario.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  usuarios!: Usuario[];



  constructor( private apiUsuarioService: ApiUsuarioService) { }

  ngOnInit(): void {

    this.apiUsuarioService.getOperadores().subscribe(
      usuarios => this.usuarios = usuarios
    );

  }

  delete(operador: Usuario): void{
    this.apiUsuarioService.delete(operador._id!).subscribe(
      response => {
        this.usuarios = this.usuarios.filter(cli => cli !== operador);
      }
    );
  }

}
