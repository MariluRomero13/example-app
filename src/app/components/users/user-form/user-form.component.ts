import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  roles: any[] = [];
  userForm: FormGroup;
  constructor(private dialog: MatDialogRef<UserFormComponent>,
              // Esto nos sirve para recuperar los valores que vienen del userIndex
              @Inject(MAT_DIALOG_DATA) public data: any)
    { dialog.disableClose = true; this.createForm(); }

  ngOnInit(): void {
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

  }

  update() {

  }

  clear() {

  }
}
