import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPPageRoutingModule } from './chat-p-routing.module';

import { ChatPPage } from './chat-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPPageRoutingModule
  ],
  declarations: [ChatPPage]
})
export class ChatPPageModule {}
