import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { IUser } from './../../../models/user';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {
  dataSource: any;
  // Estas columnas son las mismas que deben estar en la tabla, si no se encuentra, la vista no funcionará
  userColumns: string[] = ['username', 'email', 'role', 'options'];
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getUsers() {
    // Los users se van a obtener de un servicio que vendrán de la api de Adonisjs
  }

  openUserForm(action: boolean, user: any) {
    const userDialog = this.dialog.open(UserFormComponent, {
      width: '500px',
      height: '400px',
      data: {action, user}
    });
    userDialog.afterClosed().subscribe(() => {
      this.getUsers();
    });
  }
}
