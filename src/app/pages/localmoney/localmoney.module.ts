import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalmoneyPageRoutingModule } from './localmoney-routing.module';

import { LocalmoneyPage } from './localmoney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalmoneyPageRoutingModule
  ],
  declarations: [LocalmoneyPage]
})
export class LocalmoneyPageModule {}
