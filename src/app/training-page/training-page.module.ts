import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingPagePageRoutingModule } from './training-page-routing.module';

import { TrainingPagePage } from './training-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPagePageRoutingModule
  ],
  declarations: [TrainingPagePage]
})
export class TrainingPagePageModule {}
