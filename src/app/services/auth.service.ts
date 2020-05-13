import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// Asegurense de importar este archivo porque el que dice environment.prod es para producción
import { environment } from './../../environments/environment';
import { IAuth } from './../models/auth';
import { IToken } from './../models/token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endPoint = environment.endPoint;
  constructor(private http: HttpClient) { }

  login(auth: IAuth) {
    return this.http.post<IToken>(`${this.endPoint}/login`, auth);
  }

  logout() {

  }

  setToken(token: IToken) {
    // Por el momento almacenaremos el token y el refreshToken en  el localStorage
    localStorage.setItem('token', token.token);
    localStorage.setItem('refreshToken', token.refreshToken);
  }

  removeToken() {
    localStorage.clear();
  }

  isLoggedIn() {
    // Este método nos servirá para verificar que se haya iniciado sesión, es decir, protegeremos las rutas con
    // un guard, que es como si fuera un middleware de adonis
    // Esto nos ayudará a saber si realmente existe el token o no en el localStorage
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRefreshToken() {

  }
}
