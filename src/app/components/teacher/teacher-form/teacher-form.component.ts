import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserFormComponent } from '../../users/user-form/user-form.component';
import { IUser } from './../../../models/user';
import { TeachersService } from './../../../services/teachers.service';
import { UsersService } from './../../../services/users.service';
import { ITeacher } from './../../../models/teacher';
import * as moment from 'moment';
@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {
  users: IUser[];
  teacherForm: FormGroup;
  teacher: ITeacher;
  constructor(private dialog: MatDialogRef<UserFormComponent>,
              private teacherSvc: TeachersService,
              private userSvc: UsersService,
    // Esto nos sirve para recuperar los valores que vienen del userIndex
              @Inject(MAT_DIALOG_DATA) public data: any)
  { dialog.disableClose = true; this.createForm(); }

  ngOnInit(): void {
    this.getUsers();
    if (this.data.action) {
      this.loadTeacher();
    }
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
    this.getTeacher();
    this.teacherSvc.store(this.teacher).subscribe(res => {
      if (res) {
        alert('Maestro agregado correctamente');
        this.clear();
      }
    });
  }

  update() {
    this.getTeacher();
    this.teacherSvc.update(this.teacher).subscribe(res => {
      if (res) {
        alert('Maestro actualizado correctamente');
        this.clear();
      }
    });
  }

  clear() {
    this.teacherForm.reset();
    this.dialog.close();
  }

  getTeacher() {
    this.teacher = {
      name: this.teacherForm.get('name').value,
      paternal: this.teacherForm.get('paternal').value,
      maternal: this.teacherForm.get('maternal').value,
      user_id: this.teacherForm.get('user_id').value,
      phone: this.teacherForm.get('phone').value,
      birthdate: moment(this.teacherForm.get('birthday').value).format('YYYY/MM/DD')
    };

    if (this.data.action) {
      this.teacher.id = this.data.teacher.id;
    }
  }

  getUsers() {
    this.userSvc.users_unasigneds().subscribe(res => {
      this.users = res;
    });
  }

  loadTeacher() {
    const teacher = this.data.teacher;
    this.teacherForm.get('name').setValue(teacher.name);
    this.teacherForm.get('paternal').setValue(teacher.paternal);
    this.teacherForm.get('maternal').setValue(teacher.maternal);
    this.teacherForm.get('user_id').setValue(teacher.user_id);
    this.teacherForm.get('phone').setValue(teacher.phone);
    this.teacherForm.get('birthday').setValue(teacher.birthdate);

    if (this.data.action) {
      this.teacherForm.get('user_id').disable();
    }
  }
}
