import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ComponentsModule } from '../../components/components.module';
import {MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    MatTabsModule,
    MatMenuModule
  ],
})
export class HomeModule { }
