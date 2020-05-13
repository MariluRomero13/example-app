import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { UserIndexComponent } from './components/users/user-index/user-index.component';
import { TeacherIndexComponent } from './components/teacher/teacher-index/teacher-index.component';
import { AuthGuard } from './guards/auth.guard';

// La propiedad canActivate nos ayuda a añadir un guard a las rutas, y se recibe en un arreglo
// una ruta pruede tener más de un guard, por ejemplo hay casos que las rutas tienen acceso por roles
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'panel', component: PanelComponent, canActivate: [AuthGuard], children: [
    { path: 'users', component: UserIndexComponent, canActivate: [AuthGuard] },
    { path: 'teachers', component: TeacherIndexComponent, canActivate: [AuthGuard] }
  ]},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
