import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShieldWebsiteRoutingModule, paginasShield } from './shield-website-routing.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [paginasShield],
  imports: [
    CommonModule,
    ShieldWebsiteRoutingModule,
    SharedModule
  ],
  exports: [paginasShield],
})
export class ShieldWebsiteModule { }
