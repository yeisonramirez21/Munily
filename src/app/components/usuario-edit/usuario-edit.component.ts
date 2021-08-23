import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { ApiUsuarioService } from 'src/app/service/api-usuario.service';



@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styles: [
  ]
})
export class UsuarioEditComponent implements OnInit {

  submitted = false;
  editForm!: FormGroup ;
  employeeData!: Usuario[];
  EmployeeProfile: any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiUsuarioService,
    private router: Router
  ) {}

  ngOnInit() {}
  /*  this.updateEmployee();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmployee(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }*/

  // Choose options with select-dropdown
  updateProfile(e: any) {
    /*this.editForm.get('designation').setValue(e, {
      onlySelf: true
    }) aqui aqui */
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

 /* getEmployee(id: any) {
    this.apiService.getEmployee(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        email: data['email'],
        designation: data['designation'],
        phoneNumber: data['phoneNumber'],
      });
    });
  }*/

  updateEmployee() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      designation: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  /*onSubmit(): false | undefined {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateEmployee(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/usuario-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }*/

}
