import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IAuth } from 'src/app/models/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  auth: IAuth;
  loginForm: FormGroup;

  //Ahora hay que importar el servicio de AuthService
  constructor(private router: Router, private authSvc: AuthService) { this.createForm(); }

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
  }

  ngOnInit(): void {
  }

  login() {
    // Con esto obtendremos los valores que están en el formulario para poder iniciar sesión
    this.auth = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };

    this.authSvc.login(this.auth).subscribe(res => {
      // Como pudieron observar, en la consola del navegador obtuvimos el token
      if (res) {
        this.authSvc.setToken(res);
        this.router.navigate(['/panel']);
      }
    }, error => {
      if (error.status === 401) {
        alert('Verifica tu correo y/o contraseña');
      }
    });
  }

}
