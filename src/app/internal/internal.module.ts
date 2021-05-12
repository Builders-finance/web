import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InternalRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class InternalModule { }
