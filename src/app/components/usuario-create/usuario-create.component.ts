import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUsuarioService } from '../../service/api-usuario.service';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styles: [
  ]
})
export class UsuarioCreateComponent implements OnInit {

  submitted = false;//FormGroup;
  employeeForm!: FormGroup;
  EmployeeProfile:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiusuarioService: ApiUsuarioService
  ) {
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e: any){
    /*this.employeeForm.get('designation').setValue(e, {
      onlySelf: true
    }) aqui aqui aqui aqui*/
  }

  // Getter to access form control
  get myForm(){
    return this.employeeForm.controls;
  }

  /*onSubmit() {
    this.submitted = true;
    if (!this.employeeForm.valid) {
      return false;
    } else {
      this.apiusuarioService.createEmployee(this.employeeForm.value).subscribe(
        (res) => {
          console.log('Employee successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/usuario-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }*/

}
