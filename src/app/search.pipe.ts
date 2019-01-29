import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: ShopItem[], searchText: string) {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toString().toLowerCase();
    items =  items.filter(v => v.name.toLowerCase().indexOf(searchText) >= 0);
    return items;
  }

}
