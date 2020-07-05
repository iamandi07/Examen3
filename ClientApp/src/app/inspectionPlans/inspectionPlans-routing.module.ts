import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InspectionPlansComponent } from './inspectionPlans.component';
import { InspectionPlansEditComponent } from './inspectionPlans-edit/inspectionPlans-edit.component';
import { InspectionPlansListComponent } from './inspectionPlans-list/inspectionPlans-list.component';


const routes: Routes = [
  {
    path: '', component: InspectionPlansComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: InspectionPlansListComponent },
      { path: 'edit/:id', component: InspectionPlansEditComponent },
      { path: 'edit', component: InspectionPlansEditComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InspectionPlansRoutingModule {
  static routedComponents = [InspectionPlansComponent, InspectionPlansListComponent, InspectionPlansEditComponent];
}
