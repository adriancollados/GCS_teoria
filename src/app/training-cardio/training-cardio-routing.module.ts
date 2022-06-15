import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingCardioPage } from './training-cardio.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingCardioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingCardioPageRoutingModule {}
