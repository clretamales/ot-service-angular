import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },

    { path: '', redirectTo: 'inicio', pathMatch: 'full' },

    // Ruta para páginas no encontradas
    { path: '**', redirectTo: 'inicio' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
