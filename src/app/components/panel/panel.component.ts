import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    // El método ngOnInit es un metodo del ciclo de vida de un componente de Angular,
    // existen varios como el ngOnDestroy, ngAfterViewInit, entre otros.
    // Ahora lo que haremos será añadir alertas que se mostrarán por medio de un websocket
    // es decir, cuando el websocket se ejecute, mostrará la alerta a todos los navegadores
    // que tengan abierto el proyecto, por el momento solo ejecutaremos la alerta cuando el componente inicie
    alert('Hola');
  }
}
