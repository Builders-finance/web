import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/internal/components/components.module';
import { LoadingModule } from '../loading/loading.module';
import { FontawesomeSharedModule } from '../../fontawesome-shared/fontawesome-shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    RouterModule,
    CommonModule,
    ComponentsModule,
    LoadingModule,
    FontawesomeSharedModule,
    MatIconModule,
    MatDialogModule,
    ComponentsModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    PipesModule
  ],
  exports: [],
  providers: [DatePipe]
})
export class LayoutModule { }
