import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut',
})
export class ShortcutPipe implements PipeTransform {
  transform(value): unknown {
    return value.substr(0, 10) + '...';
  }
}
