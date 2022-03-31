import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnbordingPageRoutingModule } from './onbording-routing.module';

import { OnbordingPage } from './onbording.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnbordingPageRoutingModule
  ],
  declarations: [OnbordingPage]
})
export class OnbordingPageModule {}
