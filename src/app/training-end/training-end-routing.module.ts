import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingEndPage } from './training-end.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingEndPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingEndPageRoutingModule {}
