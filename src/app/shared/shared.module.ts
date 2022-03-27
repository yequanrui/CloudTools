import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ToastModule } from 'ng-devui/toast';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, TranslateModule, ToastModule],
  exports: [CommonModule, FormsModule, TranslateModule, ToastModule],
})
export class SharedModule {}
