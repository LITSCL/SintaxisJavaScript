//Los siguientes pasos son necesarios para configurar las rutas de la aplicación.

//1. Importar modulos del router de angular.
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//2. Importar los componentes.
import { HomeComponent } from "./home/home.component";
import { ComponenteComponent } from "./componente/componente.component"
import { ZapatillaComponent } from "./zapatilla/zapatilla.component";
import { MenuNavegacionComponent } from "./menu-navegacion/menu-navegacion.component";
import { CursosComponent } from "./cursos/cursos.component";
import { UsuarioComponent } from "./usuario/usuario.component";
import { PeticionComponent } from "./peticion/peticion.component";
import { RandomComponent } from "./random/random.component";
import { ContactoComponent } from "./contacto/contacto.component";

//3. Array de rutas (Debe cumplir con la siguiente estructura).
const appRoutes: Routes = [ //El valor de "path" indica el nombre de la ruta, el valor de "component" indica el componente a cargar en dicha ruta.
  {path: '', component: HomeComponent}, //La ruta vacia siempre debe estar primero e indica la ruta del index (app.component.html) (localhost:4200).
  {path: 'home', component: ComponenteComponent}, //En segundo lugar es recomendable colocar el home (Nuestra página principal)
  {path: 'componente', component: ComponenteComponent},
  {path: 'zapatilla', component: ZapatillaComponent},
  {path: 'menu-navegacion', component: MenuNavegacionComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:nombre/:lenguaje', component: CursosComponent}, //Esta URL recibe 2 parámetros, en caso de que no se entregen o solo se entrege un parámetro, se cargará la url "cursos". 
  {path: 'usuario', component: UsuarioComponent},
  {path: 'peticion', component: PeticionComponent},
  {path: 'random', component: RandomComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', component: HomeComponent} //La utlmita ruta path: "**" indica el componente a cargar si no se encuentra la ruta (404 not found).
];

//4. Exportar el modulo del router (Se deben recibir en "app.module.ts").
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes); //Aquí se estan exportando las rutas.
