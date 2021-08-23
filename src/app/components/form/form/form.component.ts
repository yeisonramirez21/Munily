import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { ApiUsuarioService } from 'src/app/service/api-usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  //public llamarusuario: Usuario = new Usuario();

  llamarusuario: Usuario = {
    name: '',
    email: '',
    designation: '',
    phoneNumber: ''

  }

  public titulo:string = "Crear Usuario";
  public idUser: any = '';




  constructor( private apiUsuarioService: ApiUsuarioService,
               private router: Router,
               private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarOperador();
  }

  cargarOperador(): void{
    this.activatedRouter.params.subscribe(params => {
      let idUsuario = params['id']
      this.idUser = idUsuario;

      if(idUsuario){
        this.apiUsuarioService.getOperador(idUsuario).subscribe(
          (llamarusuario)=> this.llamarusuario = llamarusuario)
      }
    });

  }

  public create(): void{
    this.apiUsuarioService.create(this.llamarusuario).subscribe(
      response => this.router.navigate(['/usuarios'])
    );

    console.log(this.llamarusuario);
  }

  public update(): void{/////////***************************************/////// */
    console.log("Bonton Actualizar:", this.llamarusuario._id);

    this.apiUsuarioService.update(this.llamarusuario)
      .subscribe(llamarusuario => {
        this.router.navigate(['/usuarios'])
      });

  }

}
