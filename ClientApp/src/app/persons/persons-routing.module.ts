import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonsComponent } from './persons.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonsEditComponent } from './persons-edit/persons-edit.component';


const routes: Routes = [
  {
    path: '', component: PersonsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: PersonsListComponent },
      { path: 'edit/:id', component: PersonsEditComponent },
      { path: 'edit', component: PersonsEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PersonsRoutingModule {
  static routedComponents = [PersonsComponent, PersonsListComponent, PersonsEditComponent];
}
