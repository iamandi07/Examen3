import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { AngularMaterialModule } from '../shared/angular-material.module';

import { PersonsRoutingModule } from './persons-routing.module';

import { PersonsService } from './persons.service';

@NgModule({
  declarations: [PersonsRoutingModule.routedComponents],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    AngularMaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PersonsService],
})
export class PersonsModule { }
