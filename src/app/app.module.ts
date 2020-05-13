import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserIndexComponent } from './components/users/user-index/user-index.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { TeacherFormComponent } from './components/teacher/teacher-form/teacher-form.component';
import { TeacherIndexComponent } from './components/teacher/teacher-index/teacher-index.component';
import { PanelComponent } from './components/panel/panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
// importamos estos modulos para poder hacer peticiones http
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from './services/jwt-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserIndexComponent,
    UserFormComponent,
    TeacherFormComponent,
    TeacherIndexComponent,
    PanelComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    UserFormComponent, // Esto se hace para poder usar los componentes como dialogos
    TeacherFormComponent
  ],
  providers: [
    // Hay que importar el jwt-interceptor como un provider, normalmente en el arreglo de los providers se registran
    // los servicios
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
