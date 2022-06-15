import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingEndPageRoutingModule } from './training-end-routing.module';

import { TrainingEndPage } from './training-end.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingEndPageRoutingModule
  ],
  declarations: [TrainingEndPage]
})
export class TrainingEndPageModule {}
