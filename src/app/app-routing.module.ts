import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { PlanesComponent } from './components/planes/planes.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ObituarioComponent } from './components/obituario/obituario.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { TerminosCondicionesComponent } from './components/terminos-condiciones/terminos-condiciones.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { IndexComponent } from './components/index/index.component';
import { from } from 'rxjs';
import { SubirImagenComponent } from './components/subir-imagen/subir-imagen.component';
import { LoginComponent } from './components/login/login.component';
import { UserGuard } from './services/user.guard';
import { FundacionComponent } from './components/fundacion/fundacion.component';
import { FormularioIncripcionComponent } from './components/formulario-incripcion/formulario-incripcion.component';

// formulario component


const routes: Routes = [
 {path: 'inicio', component : InicioComponent},
 {path: '', component : IndexComponent},
 {path: 'quienes-somos', component : QuienesSomosComponent},
 {path: 'planes', component : PlanesComponent},
 {path: 'galeria', component : GaleriaComponent},
 {path: 'obituario', component : ObituarioComponent},
 {path: 'contactenos', component : ContactenosComponent},
 {path: 'terminos-condiciones', component : TerminosCondicionesComponent},
 {path: 'formulario', component : FormularioComponent},
 {path: 'index', component : IndexComponent},
 {path: 'formulario-inscripcion', component : FormularioIncripcionComponent},
 {path: 'subirImagen', component : SubirImagenComponent, canActivate: [UserGuard]},
 {path: 'login', component : LoginComponent},
 {path: 'fundacion', component : FundacionComponent},
 {path: '**', component : InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
