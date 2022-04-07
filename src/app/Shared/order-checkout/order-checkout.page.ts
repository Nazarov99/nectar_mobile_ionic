import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.page.html',
  styleUrls: ['./order-checkout.page.scss'],
})
export class OrderCheckoutPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

}
