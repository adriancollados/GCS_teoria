import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingWeeksPage } from './training-weeks.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingWeeksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingWeeksPageRoutingModule {}
