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
    ReactiveFormsModule
  ],
  entryComponents: [
    UserFormComponent, // Esto se hace para poder usar los componentes como dialogos
    TeacherFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
