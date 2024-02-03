import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmisorService {
  objetoUsuario: EventEmitter<{usuario: string, email: string}> = new EventEmitter()
  constructor() { }
}
// eventEmitter conecta 2 componentes, en esta opcion se usa para conectar 2 componentes sin relacion