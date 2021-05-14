import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '../shared/ui/layout/layout.module';
import { MaterialSharedModule } from '../shared/material-shared/material-shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InternalRoutingModule,
    MaterialSharedModule,
    SharedModule,
    ComponentsModule,
    LayoutModule
  ]
})
export class InternalModule { }
