import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AplicacionComponent } from '../secciones/aplicacion/aplicacion.component';
import { BannerComponent } from '../secciones/banner/banner.component';
import { ClientesComponent } from '../secciones/clientes/clientes.component';
import { ContactoComponent } from '../secciones/contacto/contacto.component';
import { TrabajaConNosotrosComponent } from '../secciones/trabaja-con-nosotros/trabaja-con-nosotros.component';
import { FooterComponent } from '../secciones/footer/footer.component';
import { ServiciosComponent } from '../secciones/servicios/servicios.component';
import { NavbarComponent } from '../secciones/navbar/navbar.component';
import { TopbarComponent } from '../secciones/topbar/topbar.component';
import { ListadoBlogsComponent } from '../secciones/listado-blogs/listado-blogs.component';

@NgModule({
  declarations: [
    AplicacionComponent,
    BannerComponent,
    ClientesComponent,
    ContactoComponent,
    FooterComponent,
    ServiciosComponent,
    TrabajaConNosotrosComponent,
    NavbarComponent,
    TopbarComponent,
    ListadoBlogsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AplicacionComponent,
    BannerComponent,
    ClientesComponent,
    ContactoComponent,
    FooterComponent,
    ServiciosComponent,
    TrabajaConNosotrosComponent,
    NavbarComponent,
    TopbarComponent,
    ListadoBlogsComponent
  ],
})
export class SharedModule { }
