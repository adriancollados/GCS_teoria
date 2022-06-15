import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingPausePageRoutingModule } from './training-pause-routing.module';

import { TrainingPausePage } from './training-pause.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPausePageRoutingModule
  ],
  declarations: [TrainingPausePage]
})
export class TrainingPausePageModule {}
