import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GeneralPage } from './general.page';
import {MaterializeModule} from 'angular2-materialize';
import {TextMaskModule} from 'angular2-text-mask';

const routes: Routes = [
  {
    path: '',
    component: GeneralPage
  }
];

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      FormsModule,
      ReactiveFormsModule,
      MaterializeModule,
      TextMaskModule,
      RouterModule.forChild(routes)
  ],
  declarations: [GeneralPage]
})
export class GeneralPageModule {}
