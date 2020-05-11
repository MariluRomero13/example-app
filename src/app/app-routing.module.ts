import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { UserIndexComponent } from './components/users/user-index/user-index.component';
import { TeacherIndexComponent } from './components/teacher/teacher-index/teacher-index.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'panel', component: PanelComponent, children: [
    { path: 'users', component: UserIndexComponent },
    { path: 'teachers', component: TeacherIndexComponent }
  ]},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
