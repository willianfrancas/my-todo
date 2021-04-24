import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

import { CardMenuComponent } from './card-menu/card-menu.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    CardMenuComponent,
    ProfileComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MainRoutingModule,
    SharedModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class MainModule { }
