import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingFitnessPageRoutingModule } from './training-fitness-routing.module';

import { TrainingFitnessPage } from './training-fitness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingFitnessPageRoutingModule
  ],
  declarations: [TrainingFitnessPage]
})
export class TrainingFitnessPageModule {}
