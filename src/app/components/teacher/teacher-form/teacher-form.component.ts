import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserFormComponent } from '../../users/user-form/user-form.component';
import { IUser } from './../../../models/user';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {
  users: IUser[] = [];
  teacherForm: FormGroup;
  constructor(private dialog: MatDialogRef<UserFormComponent>,
    // Esto nos sirve para recuperar los valores que vienen del userIndex
              @Inject(MAT_DIALOG_DATA) public data: any)
  { dialog.disableClose = true; this.createForm(); }

  ngOnInit(): void {
  }

  createForm() {
    this.teacherForm = new FormGroup({
      name: new FormControl('', Validators.required),
      maternal: new FormControl('', Validators.required),
      paternal: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      birthday: new FormControl('', Validators.required),
      user_id: new FormControl('', Validators.required)
    });
  }

  store() {

  }

  update() {

  }

  clear() {

  }
}
