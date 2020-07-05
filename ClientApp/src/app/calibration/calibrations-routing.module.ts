import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalibrationsComponent } from './calibrations.component';
import { CalibrationsListComponent } from './calibrations-list/calibrations-list.component';
import { CalibrationsEditComponent } from './calibrations-edit/calibrations-edit.component';


const routes: Routes = [
  {
    path: '', component: CalibrationsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: CalibrationsListComponent },
      { path: 'edit/:id', component: CalibrationsEditComponent },
      { path: 'edit', component: CalibrationsEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CalibrationsRoutingModule {
  static routedComponents = [CalibrationsComponent, CalibrationsListComponent, CalibrationsEditComponent];
}
