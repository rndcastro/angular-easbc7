import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itens = [];

  constructor() { }

  addToCart(product){
    this.itens.push(product);
    window.alert("Product has been added to the cart!");
  }

  getItens(){
    return this.itens;
  }

  clearCart(){
    this.itens = [];
  }

}