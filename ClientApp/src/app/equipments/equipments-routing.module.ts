import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentsComponent } from './equipments.component';
import { EquipmentsListComponent } from './equipments-list/equipments-list.component';
import { EquipmentsEditComponent } from './equipments-edit/equipments-edit.component';


const routes: Routes = [
  {
    path: '', component: EquipmentsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: EquipmentsListComponent },
      { path: 'edit/:id', component: EquipmentsEditComponent },
      { path: 'edit', component: EquipmentsEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EquipmentsRoutingModule {
  static routedComponents = [EquipmentsComponent, EquipmentsListComponent, EquipmentsEditComponent];
}
