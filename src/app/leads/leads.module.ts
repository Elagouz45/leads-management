import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { PotentialDuplicatesListComponent } from './components/potential-duplicates-list/potential-duplicates-list.component';
import {ListComponent} from "./components/list/list.component";
import { LeadsComponent } from './pages/leads/leads.component';
import {MatCardModule} from "@angular/material/card";
const routes: Routes = [
  {
    path: '',
    component: LeadsComponent
  }
];


@NgModule({
  declarations: [
    ListComponent,
    PotentialDuplicatesListComponent,
    LeadsComponent
  ],
  imports: [RouterModule.forChild(routes), SharedModule, MatCardModule],
  exports: [],
  providers: [],
})
export class LeadsModule {
}
