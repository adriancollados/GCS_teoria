import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingExercisePageRoutingModule } from './training-exercise-routing.module';

import { TrainingExercisePage } from './training-exercise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingExercisePageRoutingModule
  ],
  declarations: [TrainingExercisePage]
})
export class TrainingExercisePageModule {}
