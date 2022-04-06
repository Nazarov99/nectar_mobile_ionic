import { Component, OnInit } from '@angular/core';
import {Product} from "../../Interfaces/product";
import {ProductDetailPage} from "../../Shared/product-detail/product-detail.page";
import {ModalController} from "@ionic/angular";

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
  sliderGroceries = {
    slidesPerView: 1.5,
    pagination: false,
    spaceBetween: 10
  };
  sliders = [
    {img: 'assets/slider/slider-2.webp'},
    {img: 'assets/slider/slider-2.webp'},
    {img: 'assets/slider/slider-2.webp'}
  ];
  products = [
    {name: 'Red Apple', price: '4.99', image: 'assets/products/product-1.png', description: 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.'},
    {name: 'Red Apple', price: '4.99', image: 'assets/products/product-1.png', description: 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.'},
    {name: 'Red Apple', price: '4.99', image: 'assets/products/product-1.png', description: 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.'},
    {name: 'Red Apple', price: '4.99', image: 'assets/products/product-1.png', description: 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.'},
  ];
  groceries = [
    {name: 'Pulses', image: 'assets/sub-category/sub-product-2.png'},
    {name: 'Rice', image: 'assets/sub-category/sub-product-1.png'},
    {name: 'Pulses', image: 'assets/sub-category/sub-product-2.png'},
    {name: 'Rice', image: 'assets/sub-category/sub-product-1.png'},
    {name: 'Pulses', image: 'assets/sub-category/sub-product-2.png'},
    {name: 'Rice', image: 'assets/sub-category/sub-product-1.png'},
  ];
  public scroll = false;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  onScroll(event) {
    if (event.detail.deltaY > 0) {
      this.scroll = true;
    } else if (event.detail.deltaY < 0) {
      this.scroll = false;
    }
  }

  async productDetail(product: Product) {
    const modal = await this.modalController.create({
      component: ProductDetailPage,
      componentProps: {product},
    });
    return await modal.present();
  }

}
