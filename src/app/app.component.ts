import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShoppingService } from './shopping.service';
import { ShopItem, ShopCategory } from './shopItems';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  shopItems : ShopItem[];
  shopCategory : ShopCategory[];   
  title = 'Trikotshop';
  shoppingCart = this._shoppingService.getShoppingCart();

  constructor(private _shoppingService : ShoppingService) { }
  ngOnInit() {
    this.shopItems = this._shoppingService.getItems();
    this.shopCategory = this._shoppingService.getCategorys();
  }   
}
