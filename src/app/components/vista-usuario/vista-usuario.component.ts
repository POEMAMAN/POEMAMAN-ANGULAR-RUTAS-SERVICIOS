import { Component, OnInit } from '@angular/core';
import { EmisorService } from 'src/app/services/emisor.service';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnInit{

usuarios: {usuario: string, email: string}[] = []//esto indica que es array que contiene ese objeto y se inicializa como un array vacio, como si pusieras User[] = []. ESto seria si lo declarases como un interface
// usuarios: User[] = [];

constructor(private userService: EmisorService){
  this.userService.objetoUsuario.subscribe((usuario) => this.usuarios.push(usuario))
  //asi un componente escuchar siempre al otro lo que emite
}

ngOnInit(){

}
}
//el OnInit aparece al ppio del componente, es parte de la vida del componente. En el constructor no se suele sar al ser asincrono, en este caso si porque no hay nada externo
