import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { ComponentsModule } from 'src/app/internal/components/components.module';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';



@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    DetailRoutingModule,
    ComponentsModule,
    MatExpansionModule,
    PipesModule
  ],
  providers: [CurrencyPipe]
})
export class DetailModule { }
