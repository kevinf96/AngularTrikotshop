import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShoppingService } from '../shopping.service';
import { ShopItem, ShopCategory } from '../shopItems';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  shopItems : ShopItem[];
  shopCategory : ShopCategory[];
  itemCount: number = 4;
  searchText = new FormControl('');
  leagueSelect = new FormControl('');

  constructor(private _shoppingService : ShoppingService) { }

  ngOnInit() {
    this.shopItems = this._shoppingService.getItems();
    this.shopCategory = this._shoppingService.getCategorys();
    this.leagueSelect.setValue(this.shopCategory[0].id);
  }

  onAddShoppingCart(itemID: any){
    this._shoppingService.addShoppingCart(itemID);
  }

}
