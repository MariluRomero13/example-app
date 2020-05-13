import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UsersService } from './../../../services/users.service';
import { RolesService } from './../../../services/roles.service';
import { IRole } from './../../../models/role';
import { IUser } from './../../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  roles: IRole[];
  userForm: FormGroup;
  user: IUser;
  constructor(private dialog: MatDialogRef<UserFormComponent>,
              private userSvc: UsersService,
              private roleSvc: RolesService,
              // Esto nos sirve para recuperar los valores que vienen del userIndex
              @Inject(MAT_DIALOG_DATA) public data: any)
    { dialog.disableClose = true; this.createForm(); }

  ngOnInit(): void {
    this.getRoles();
    if (this.data.action) {
      this.loadUser();
    }
  }

  createForm() {
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required), // Puedes añadir más validaciones, las que necesites
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      role_id: new FormControl('', Validators.required)
    });
  }

  store() {
    this.getUser();
    this.userSvc.store(this.user).subscribe(res => {
      if (res) {
        alert('Usuario registrado correctamente');
        this.clear();
      }
    });
  }

  update() {
    this.getUser();
    this.userSvc.update(this.user).subscribe(res => {
      if (res) {
        alert('Usuario actualizado correctamente');
        this.clear();
      }
    });
  }

  clear() {
    this.userForm.reset();
    this.dialog.close();
  }

  loadUser() {
    const user = this.data.user;
    this.userForm.get('email').setValue(user.email);
    this.userForm.get('username').setValue(user.username);
    this.userForm.get('password').setValue('1234');
    this.userForm.get('role_id').setValue(user.role_id);
  }

  getRoles() {
    this.roleSvc.index().subscribe(res => {
      this.roles = res;
    });
  }

  getUser() {
    this.user = {
      email: this.userForm.get('email').value,
      password: this.userForm.get('password').value,
      role_id: this.userForm.get('role_id').value,
      username: this.userForm.get('username').value
    };

    if (this.data.action) {
      this.user.id = this.data.user.id;
    }
  }
}
