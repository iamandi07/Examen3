import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { AngularMaterialModule } from '../shared/angular-material.module';

import { CalibrationsRoutingModule } from './calibrations-routing.module';
import { CalibrationsService } from './calibrations.service';

@NgModule({
  declarations: [CalibrationsRoutingModule.routedComponents],
  imports: [
    CommonModule,
    CalibrationsRoutingModule,
    AngularMaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CalibrationsService],
})
export class CalibrationsModule { }
