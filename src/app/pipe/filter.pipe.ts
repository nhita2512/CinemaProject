import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  userArray: [] = [];
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return this.userArray;
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}
