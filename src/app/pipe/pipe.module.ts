import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutPipe } from './shortcut.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [ShortcutPipe, FilterPipe],
  imports: [CommonModule],
  exports: [ShortcutPipe, FilterPipe],
})
export class PipeModule {}
