import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from '../user-form/user-form.component';
import { IUser } from './../../../models/user';
import { UsersService } from './../../../services/users.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {
  dataSource: any;
  // Estas columnas son las mismas que deben estar en la tabla, si no se encuentra, la vista no funcionará
  userColumns: string[] = ['username', 'email', 'role', 'options'];

  // importamos el service de users para poder consumirlo
  constructor(private dialog: MatDialog, private userSvc: UsersService) { }

  ngOnInit(): void {
    // Mandamos llamar el método para que cargue al momento de iniciar el componente
    this.getUsers();
  }

  getUsers() {
    this.userSvc.index().subscribe(res => {
      // Aqui le asignamos lo que nos regrese la petición al datasource, el cual está con la tabla
      // Ojo, esto se hace porque es Angular Material
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = res;
    });
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
