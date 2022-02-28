import { NgModule } from '@angular/core';
import { DropDownModule, RadioModule, TabsModule, ToggleModule } from 'ng-devui';
import { SharedModule } from '@shared';
import { ThemePickerComponent } from './theme-picker.component';

@NgModule({
  imports: [DropDownModule, RadioModule, TabsModule, ToggleModule, SharedModule],
  exports: [ThemePickerComponent],
  declarations: [ThemePickerComponent],
})
export class ThemePickerModule {}
