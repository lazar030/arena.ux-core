import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ArenaUXComponent } from './arena-ux.component';
import { AuxCardModule } from './aux-card/aux-card.module';
import { AuxLayoutComponent } from './aux-layout/aux-layout.component';

@NgModule({
  declarations: [ArenaUXComponent, AuxLayoutComponent],
  imports: [
    IonicModule,
    AuxCardModule
  ],
  exports: [ArenaUXComponent, AuxCardModule, AuxLayoutComponent]
})
export class ArenaUXModule { }
