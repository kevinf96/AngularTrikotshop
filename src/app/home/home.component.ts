import { Component, OnInit } from '@angular/core';
import { shopItemList } from '../itemlist';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  shopItems = shopItemList;
  itemCount: number = 4;
  constructor() { }
  searchText = new FormControl('');
  ngOnInit() {
  }

}
