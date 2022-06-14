import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingWeeksPageRoutingModule } from './training-weeks-routing.module';

import { TrainingWeeksPage } from './training-weeks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingWeeksPageRoutingModule
  ],
  declarations: [TrainingWeeksPage]
})
export class TrainingWeeksPageModule {}
