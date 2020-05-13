import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITeacher } from './../models/teacher';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  endPoint = environment.endPoint;
  constructor(private http: HttpClient) { }

  index() {
    return this.http.get<ITeacher[]>(`${this.endPoint}/teachers`);
  }

  store(teacher: ITeacher) {
    return this.http.post<any>(`${this.endPoint}/teachers`, teacher);
  }

  update(teacher: ITeacher) {
    return this.http.put<any>(`${this.endPoint}/teachers/${teacher.id}`, teacher);
  }

  show(id: number) {
    return this.http.get<ITeacher>(`${this.endPoint}/teachers/${id}`);
  }

  delete(teacher: ITeacher) {
    return this.http.delete<any>(`${this.endPoint}/teachers/${teacher.id}`);
  }
}
