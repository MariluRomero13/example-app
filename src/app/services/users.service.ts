import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { IUser } from './../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  endPoint = environment.endPoint;
  // AHora continuaremos con los semás servicios, en este caso el de usuarios
  constructor(private http: HttpClient) { }

  // Estos son los métodos principales que se usan para hacer el crud
  // en caso de que necesiten más métodos los pueden crear de la misma forma
  // Si se dan cuenta, se usan los métodos básicos de http get, post, put, entre otros
  // Ahora realizaremos lo mismo para los maestros
  index() {
    return this.http.get<IUser[]>(`${this.endPoint}/users`);
  }

  store(user: IUser) {
    return this.http.post<any>(`${this.endPoint}/users`, user);
  }

  update(user: IUser) {
    return this.http.put<any>(`${this.endPoint}/users/${user.id}`, user);
  }

  show(id: number) {
    return this.http.get<IUser>(`${this.endPoint}/users/${id}`);
  }

  delete(user: IUser) {
    return this.http.delete<any>(`${this.endPoint}/users/${user.id}`);
  }

  // Este método lo usaremos para cargar los usuarios en un select
  users_unasigneds() {
    return this.http.get<IUser>(`${this.endPoint}/users_unasigneds`);
  }
}
