import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EuropaComponent } from './components/europa/europa.component';
import { ErrorComponent } from './components/error/error.component';
import { SpainComponent } from './components/spain/spain.component';
import { PortugalComponent } from './components/portugal/portugal.component';

const routes: Routes = [
{
  path: 'europa', component: EuropaComponent, children: [
    {
      path: 'spain', component: SpainComponent
    },
    {
      path: 'portugal', component: PortugalComponent
    }
  ]
  // si hay hijos de esta ruta es un array de objetos
},
{
  path: '', redirectTo: '/europa' , pathMatch: 'full'
  // cuando es ruta vacia nos lleva a europa
},
{
  path: '**', component: ErrorComponent
//** es un aviso que la s rutas no declaradas estan con ese seudonimo, y es cuando equivocan la ruta, nos lleva  la ppal*/
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
