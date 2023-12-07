import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing, appRoutingProviders } from './app.routing'; //Aquí se esta recibiendo la configuración de rutas.

import { AppComponent } from './app.component';
import { ComponenteComponent } from './componente/componente.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { ZapatillaComponent } from './zapatilla/zapatilla.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { PeticionComponent } from './peticion/peticion.component';
import { RandomComponent } from './random/random.component';
import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';
import { ResaltadoDirective } from './resaltado.directive';

@NgModule({
  declarations: [ //Aquí se cargan las directivas (Componentes).
    AppComponent,
    ComponenteComponent,
    MenuNavegacionComponent,
    ZapatillaComponent,
    HomeComponent,
    CursosComponent,
    UsuarioComponent,
    PeticionComponent,
    RandomComponent,
    CalculadoraPipe,
    ContactoComponent,
    ResaltadoDirective
  ],
  imports: [ //Aquí se cargan los modulos (Para que se permitan usar en otros componentes).
    BrowserModule,
    FormsModule,
    routing, //Cargando las rutas.
    HttpClientModule
  ],
  providers: [ //Aquí se cargan los servicios (Para que se permitan usar en otros componentes).
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
