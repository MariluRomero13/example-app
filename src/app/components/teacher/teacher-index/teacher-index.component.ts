import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeacherFormComponent } from '../teacher-form/teacher-form.component';

@Component({
  selector: 'app-teacher-index',
  templateUrl: './teacher-index.component.html',
  styleUrls: ['./teacher-index.component.css']
})
export class TeacherIndexComponent implements OnInit {
  dataSource: any;
  teacherColumns: string[] = ['name', 'paternal', 'maternal', 'phone', 'birthday', 'options'];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getTeacher() {
    // Vamos a conectarnos a la api que hicimos con adonis
  }

  openTeacherForm(action, teacher) {
    const teacherDialog = this.dialog.open(TeacherFormComponent, {
      width: '400px',
      height: '500px',
      data: { action, teacher }
    });
    teacherDialog.afterClosed().subscribe(() => {
      this.getTeacher();
    });
  }
}
