import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  sliderOpts = {
    speed: 400,
    loop: true
  };
  sliderProductOpts = {
    slidesPerView: 2.1,
    pagination: false,
    spaceBetween: 5
  };
  sliders = [
    {img: 'assets/slider/slider-2.svg'},
    {img: 'assets/slider/slider-2.svg'},
    {img: 'assets/slider/slider-2.svg'}
  ];
  products = [
    {name: 'Red Apple', price: '4.99', image: 'assets/products/product-1.png'},
    {name: 'Red Apple', price: '4.99', image: 'assets/products/product-1.png'},
    {name: 'Red Apple', price: '4.99', image: 'assets/products/product-1.png'},
    {name: 'Red Apple', price: '4.99', image: 'assets/products/product-1.png'},
  ];
  category = [
    {name: 'Frash Fruits & Vegetable', image: ''},
    {name: 'Cooking Oil & Ghee', image: ''},
  ];

  constructor() { }

  ngOnInit() {
  }

}
