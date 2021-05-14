import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalRoutingModule } from './external-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MaterialSharedModule } from '../shared/material-shared/material-shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExternalRoutingModule
  ]
})
export class ExternalModule { }
