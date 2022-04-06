import { Component, OnInit } from '@angular/core';
import {Product} from "../../Interfaces/product";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  public product: Product;
  public description: boolean;
  public nutritions: boolean;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  drop(data: any) {
    if (data === 'description') {
      this.description = !this.description;
    }
    if (data === 'nutritions') {
      this.nutritions = !this.nutritions;
    }

  }

  async close() {
    await this.modalController.dismiss();
  }

}
