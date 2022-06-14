import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingFitnessPage } from './training-fitness.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingFitnessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingFitnessPageRoutingModule {}
