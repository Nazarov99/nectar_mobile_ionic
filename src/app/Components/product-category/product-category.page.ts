import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../../Interfaces/product";
import {ProductDetailPage} from "../../Shared/product-detail/product-detail.page";
import {ModalController} from "@ionic/angular";
import {ProductFilterPage} from "../../Shared/product-filter/product-filter.page";

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.page.html',
  styleUrls: ['./product-category.page.scss'],
})
export class ProductCategoryPage implements OnInit {
  public scroll = false;
  products = [
    {name: 'Red Apple', price: '4.99', image: 'assets/products/product-1.png', description: 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.'},
    {name: 'Red Apple', price: '4.99', image: 'assets/products/product-1.png', description: 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.'},
    {name: 'Red Apple', price: '4.99', image: 'assets/products/product-1.png', description: 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.'},
    {name: 'Red Apple', price: '4.99', image: 'assets/products/product-1.png', description: 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.'},
    {name: 'Red Apple', price: '4.99', image: 'assets/products/product-1.png', description: 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.'},
    {name: 'Red Apple', price: '4.99', image: 'assets/products/product-1.png', description: 'Apples are nutritious. Apples may be good for weight loss. apples may be good for your heart. As part of a healtful and varied diet.'},
  ];

  constructor(private router: Router,
              private modalController: ModalController) { }

  ngOnInit() {
  }

  onScroll(event) {
    if (event.detail.deltaY > 0) {
      this.scroll = true;
    } else if (event.detail.deltaY < 0) {
      this.scroll = false;
    }
  }

  async filterProduct() {
    const modal = await this.modalController.create({
      component: ProductFilterPage,
    });
    return await modal.present();
  }

  async productDetail(product: Product) {
    const modal = await this.modalController.create({
      component: ProductDetailPage,
      componentProps: {product},
    });
    return await modal.present();
  }

  close() {
    this.router.navigate(['tabs/search']);
  }
}
