import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '@pipes/pipes.module';
import { SharedModule } from '@shared';
import { AvatarModule, CardModule, TabsModule } from 'ng-devui';
import { Puzzle2048Component } from './puzzle-2048.component';

@NgModule({
  imports: [
    AvatarModule,
    CardModule,
    TabsModule,
    SharedModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: Puzzle2048Component }]),
  ],
  declarations: [Puzzle2048Component],
})
export class Puzzle2048Module {}
