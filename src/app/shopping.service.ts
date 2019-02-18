import { Injectable } from '@angular/core';
import { shopItemList,shopCategoryList } from './itemlist';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  constructor() { }

  shoppingCart: number[] = [];
  getItems(){
    return shopItemList;
  }

  getCategorys(){
    return shopCategoryList;
  }

  addShoppingCart(itemID : number){
    this.shoppingCart.push(itemID);
  }

  getShoppingCart(){
    return this.shoppingCart;
  }
}
