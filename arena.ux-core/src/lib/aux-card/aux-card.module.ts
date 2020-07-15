import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AuxCardComponent } from './aux-card.component';
import { AuxCardHeaderComponent } from './aux-card-header/aux-card-header.component';
import { AuxCardContentComponent } from './aux-card-content/aux-card-content.component';

@NgModule({
  declarations: [AuxCardComponent, AuxCardHeaderComponent, AuxCardContentComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AuxCardComponent, AuxCardHeaderComponent, AuxCardContentComponent],
})
export class AuxCardModule { }
