import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingExercisePage } from './training-exercise.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingExercisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingExercisePageRoutingModule {}
