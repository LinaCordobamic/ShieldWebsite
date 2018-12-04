import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { DetalleServicioComponent } from './paginas/detalle-servicio/detalle-servicio.component';
import { GraciasComponent } from './paginas/gracias/gracias.component';
import { BlogComponent } from './paginas/blog/blog.component';
import { DetalleBlogComponent } from './paginas/detalle-blog/detalle-blog.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'detalle-servicio',
    component:DetalleServicioComponent
  },

  {
    path:'gracias',
    component:GraciasComponent
  },

  {
    path:'blog',
    component:BlogComponent
  },

  {
    path:'detalle-blog',
    component:DetalleBlogComponent
  }
];

export const paginasShield=[
  HomeComponent,
  DetalleServicioComponent,
  GraciasComponent,
  BlogComponent,
  DetalleBlogComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShieldWebsiteRoutingModule { }
