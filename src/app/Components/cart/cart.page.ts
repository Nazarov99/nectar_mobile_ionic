import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public cart = [
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', count: 1, price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', count: 1, price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', count: 1, price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', count: 1, price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', count: 1, price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', count: 1, price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', count: 1, price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', count: 1, price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', count: 1, price: '4.99'},
  ];
  public scroll = false;

  constructor() { }

  ngOnInit() {
  }

  onScroll(event) {
    if (event.detail.deltaY > 0) {
      this.scroll = true;
    } else if (event.detail.deltaY < 0) {
      this.scroll = false;
    }
  }

}
