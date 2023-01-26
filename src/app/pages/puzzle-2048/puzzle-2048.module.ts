import { NgModule } from '@angular/core';
import { AvatarModule, CardModule, TabsModule } from 'ng-devui';
import { SharedModule } from '@shared';
import { PipesModule } from '@pipes/pipes.module';
import { Puzzle2048RoutingModule } from './puzzle-2048-routing.module';
import { Puzzle2048Component } from './puzzle-2048.component';

@NgModule({
  imports: [AvatarModule, CardModule, TabsModule, SharedModule, PipesModule, Puzzle2048RoutingModule],
  declarations: [Puzzle2048Component],
})
export class Puzzle2048Module {}
