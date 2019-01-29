import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string, leagueSelect: number) {
    if(!items) return [];
    console.log(leagueSelect);
    searchText = searchText.toString().toLowerCase();
    items = (!searchText) ? items : items.filter(v => v.name.toLowerCase().indexOf(searchText) >= 0);
    items =  (leagueSelect > 0) ? items.filter(v => v.category == leagueSelect) : items;
    return items; 
  }

}
