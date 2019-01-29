import { Component, OnInit } from '@angular/core';
import { shopItemList,shopCategoryList } from '../itemlist';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  shopItems = shopItemList;
  shopCategory = shopCategoryList;
  itemCount: number = 4;
  constructor() { }
  searchText = new FormControl('');
  leagueSelect = new FormControl('');
  ngOnInit() {
    this.leagueSelect.setValue(this.shopCategory[0].id);
  }

}
