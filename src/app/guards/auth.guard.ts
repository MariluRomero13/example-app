import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authSvc: AuthService, private router: Router) {}

  // El CanActivate nos ayuda a verificar si realmente una ruta cumple con la condición, es decir,
  // Todas aquellas rutas que tengan el guard y cumplan con la condición del guard tendrán acceso o si no
  // se les va a denegar, es por eso que se retorna un boolean
  // AHora añadiremos el guard a las rutas en el archivo de routing
  canActivate() {
    if (!this.authSvc.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
