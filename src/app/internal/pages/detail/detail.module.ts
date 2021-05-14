import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { ComponentsModule } from 'src/app/internal/components/components.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    DetailRoutingModule,
    ComponentsModule
  ]
})
export class DetailModule { }
