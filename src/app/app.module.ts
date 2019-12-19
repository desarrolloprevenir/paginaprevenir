import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlanesComponent } from './components/planes/planes.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ObituarioComponent } from './components/obituario/obituario.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { TerminosCondicionesComponent } from './components/terminos-condiciones/terminos-condiciones.component';
import {CarouselModule} from "ngx-carousel-lib";
import { FormularioComponent } from './components/formulario/formulario.component';
import { IndexComponent } from './components/index/index.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { SubirImagenComponent } from './components/subir-imagen/subir-imagen.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './user/user.service';
import { UserGuard } from './services/user.guard';
import { OpticaComponent } from './components/optica/optica.component';
import { FundacionComponent } from './components/fundacion/fundacion.component';
import { GaleryComponent } from './components/galery/galery.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienesSomosComponent,
    MenuComponent,
    FooterComponent,
    PlanesComponent,
    GaleriaComponent,
    ObituarioComponent,
    ContactenosComponent,
    TerminosCondicionesComponent,
    FormularioComponent,
    IndexComponent,
    ImagenesPipe,
    SubirImagenComponent,
    LoginComponent,
    OpticaComponent,
    FundacionComponent,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    UserGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
