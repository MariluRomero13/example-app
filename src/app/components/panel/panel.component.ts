import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import Ws from '@adonisjs/websocket-client';
const ws = Ws('ws://localhost:3333', { path: 'ws' }); // esta dirección es la del localhost o tu ip
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
    this.connectWs();
  }

  connectWs() {
    // Lo siguiente, es hacer la conexión con el websocket
    ws.connect(); // aquí nos conectamos
    ws.on('open', () => { // aquí abrimos el canal

      const notification = ws.subscribe('notification'); // aquí nos subscribimos al canal
      // Nota, si ustedes le pusieron otro nombre, se debe de llamar igual aquí
      // en nuestro caso nuestro channel se llama notification
      notification.on('ready', () => { // preguntamos si el canal está listo
        // y cada vez que el notification se active se lanzará una nueva alerta, ese websocket se ejecuta
        // cuando se registra un nuevo maestro, para verificar si funciona vamos hacer los siguiente,
        // vamos abrir dos navegadores y cuando en uno se registre un maestro, en el otro se debe mostrar la notificación
        notification.on('new:notification', (res) => {
          alert('Nuevo maestro registrado en la plataforma');
        });
      });

      notification.on('error', (error) => {
        console.log('Connection failed: ' + error);
      });
    });
  }
}


// como pudieron observar la alerta se disparó en ambos navegadores,
// lo único que faltaría es que también se actualicen los maestros
