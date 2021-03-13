import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListImcComponent } from './list-imc/list-imc.component';
import { RegisterImcComponent } from './register-imc/register-imc.component';
import { ShowRegistryComponent } from './show-registry/show-registry.component';


const routes: Routes = [
  { path: 'novo-registro', component: RegisterImcComponent },
  { path: 'listar-todos', component: ListImcComponent },
  { path: 'buscar-registro', component: ShowRegistryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
