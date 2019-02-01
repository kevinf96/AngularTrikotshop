import { Injectable } from '@angular/core';
import { shopItemList,shopCategoryList } from './itemlist';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  constructor() { }

  getItems(){
    return shopItemList;
  }

  getCategorys(){
    return shopCategoryList;
  }
}
