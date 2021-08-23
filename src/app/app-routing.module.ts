import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UsuarioCreateComponent } from './components/usuario-create/usuario-create.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';
import { FormComponent } from './components/form/form/form.component';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'usuarios'
  },
  {
    path: 'create-usuario',
    component: UsuarioCreateComponent,
  },
  {
    path: 'edit-usuario/:id',
    component: UsuarioEditComponent,
  },
  {
    path: 'usuario-list',
    component: UsuarioListComponent,
  },
  {
    path: 'usuarios/form',
    component: FormComponent,
  },
  {
    path: 'usuarios/form/:id',
    component: FormComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
