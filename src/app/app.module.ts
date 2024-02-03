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
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './components/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    EuropaComponent,
    SpainComponent,
    PortugalComponent,
    ErrorComponent,
    FormComponent,
    VistaUsuarioComponent,
    FormComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
