import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  itens = [];

  constructor() { }

  addTocart(product){
    this.itens.push(product);
  }

  getItens(){
    return this.itens;
  }

  clearCart(){
    this.itens = [];
  }

}