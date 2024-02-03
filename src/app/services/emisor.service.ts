import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmisorService {
  objetoUsuario: EventEmitter<{usuario: string, email: string}> = new EventEmitter()
  constructor(private http: HttpClient) { }
  //llamamos a una api, un recursos externo por el constructor, a traves de HTTPClientModule

  getCharacters(){
    return this.http.get('https://api.sampleapis.com/simpsons/characters')
  } //metodo de fetch
}
// eventEmitter conecta 2 componentes, en esta opcion se usa para conectar 2 componentes sin relacion
