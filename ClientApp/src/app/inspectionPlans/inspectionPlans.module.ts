import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../Core/core.module';
import { AngularMaterialModule } from '../shared/angular-material.module';

import { InspectionPlansRoutingModule } from './inspectionPlans-routing.module';
import { InspectionPlansService } from './inspectionPlans.service';

@NgModule({
  declarations: [InspectionPlansRoutingModule.routedComponents],
  imports: [
      CommonModule,
      InspectionPlansRoutingModule,
      AngularMaterialModule,
      CoreModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [InspectionPlansService]
})
export class InspectionPlansModule { }
