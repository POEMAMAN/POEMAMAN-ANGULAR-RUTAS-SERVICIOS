import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EuropaComponent } from './components/europa/europa.component';
import { SpainComponent } from './components/spain/spain.component';
import { PortugalComponent } from './components/portugal/portugal.component';
import { ErrorComponent } from './components/error/error.component';
import { FormComponent } from './components/form/form.component';
import { VistaUsuarioComponent } from './components/vista-usuario/vista-usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EuropaComponent,
    SpainComponent,
    PortugalComponent,
    ErrorComponent,
    FormComponent,
    VistaUsuarioComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
