import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { IRole } from '../models/role';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  endPoint = environment.endPoint;
  constructor(private http: HttpClient) { }

  index() {
    return this.http.get<IRole[]>(`${this.endPoint}/roles`);
  }
}
