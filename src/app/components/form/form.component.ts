import { Component } from '@angular/core';
import { EmisorService } from 'src/app/services/emisor.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  usuario: string ="";//se declaran como string y empiezan vacios
  email: string ="";

  constructor(private userService: EmisorService){

  }

  handleForm(){
    this.userService.objetoUsuario.emit({usuario: this.usuario, email: this.email})
  }

}
// cuando se quiere usar un servicio hay que inyectar el constructor
