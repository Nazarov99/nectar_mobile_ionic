import { Component, OnInit } from '@angular/core';
import {Product} from "../../Interfaces/product";
import {ProductDetailPage} from "../../Shared/product-detail/product-detail.page";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {
  public favorites = [
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', price: '4.99'},
    {name: 'Bell Pepper Red', image: 'assets/products/product-1.png', price: '4.99'},
  ];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async productDetail(product: any) {
    const modal = await this.modalController.create({
      component: ProductDetailPage,
      componentProps: {product},
    });
    return await modal.present();
  }

}
