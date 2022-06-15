import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingCardioPageRoutingModule } from './training-cardio-routing.module';

import { TrainingCardioPage } from './training-cardio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingCardioPageRoutingModule
  ],
  declarations: [TrainingCardioPage]
})
export class TrainingCardioPageModule {}
