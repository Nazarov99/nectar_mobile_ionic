import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  public lists = [
    {name: 'Orders', icon: 'assets/icons/order-icon.svg'},
    {name: 'My Details', icon: 'assets/icons/detail-icon.svg'},
    {name: 'Delivery Address', icon: 'assets/icons/delivery-icon.svg'},
    {name: 'Payment Methods', icon: 'assets/icons/payment-icon.svg'},
    {name: 'Help', icon: 'assets/icons/help-icon.svg'},
    {name: 'About ', icon: 'assets/icons/about-icon.svg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
