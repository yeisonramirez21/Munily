import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { UsuarioCreateComponent } from './components/usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { ApiUsuarioService } from './service/api-usuario.service';
import { FormComponent } from './components/form/form/form.component';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioCreateComponent,
    UsuarioEditComponent,
    UsuarioListComponent,
    FormComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiUsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
