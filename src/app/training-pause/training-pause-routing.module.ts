import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingPausePage } from './training-pause.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingPausePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingPausePageRoutingModule {}
