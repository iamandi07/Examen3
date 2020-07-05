import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { AngularMaterialModule } from '../shared/angular-material.module';

import { EquipmentsRoutingModule } from './equipments-routing.module';
import { EquipmentsService } from './equipments.service';

@NgModule({
  declarations: [EquipmentsRoutingModule.routedComponents],
  imports: [
    CommonModule,
    EquipmentsRoutingModule,
    AngularMaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EquipmentsService],
})
export class EquipmentsModule { }
