import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: ShopItem[], searchText: string, leagueSelect: number) {
    if(!items) return [];
    if(!searchText) return items;
    console.log(leagueSelect);
    searchText = searchText.toString().toLowerCase();
    items =  items.filter(v => v.name.toLowerCase().indexOf(searchText) >= 0);
    if(leagueSelect > 0)
      items =  items.filter(v => v.category == leagueSelect);
    return items;
  }

}
