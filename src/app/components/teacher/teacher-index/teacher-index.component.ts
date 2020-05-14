import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TeacherFormComponent } from '../teacher-form/teacher-form.component';
import { TeachersService } from './../../../services/teachers.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-teacher-index',
  templateUrl: './teacher-index.component.html',
  styleUrls: ['./teacher-index.component.css']
})
export class TeacherIndexComponent implements OnInit {
  dataSource: any;
  teacherColumns: string[] = ['name', 'paternal', 'maternal', 'phone', 'birthday', 'options'];
  constructor(private dialog: MatDialog, private teacherSvc: TeachersService) { }

  ngOnInit(): void {
    this.getTeacher();
  }

  getTeacher() {
    this.teacherSvc.index().subscribe(res => {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = res;
    });
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


  delete(teacher) {
    this.teacherSvc.delete(teacher).subscribe(res => {
      alert('Status cambiado correctamente');
    });
  }
}
