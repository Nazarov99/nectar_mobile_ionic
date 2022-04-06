import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {SubCategory} from "../../Interfaces/sub-category";
import {Brand} from "../../Interfaces/brand";

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.page.html',
  styleUrls: ['./product-filter.page.scss'],
})
export class ProductFilterPage implements OnInit {
  public subCategory: SubCategory[] = [
    {id: 1, name: 'Eggs', checked: true},
    {id: 2, name: 'Noodles & Pasta', checked: false},
    {id: 3, name: 'Chips & Crisps', checked: false},
    {id: 4, name: 'Fast Food', checked: false},
    {id: 5, name: 'Chips & Crisps', checked: false},
    {id: 6, name: 'Fast Food', checked: false},
    {id: 7, name: 'Chips & Crisps', checked: false},
    {id: 8, name: 'Fast Food', checked: false}
  ];
  public brand: Brand[] = [
    {id: 1, name: 'Individual Callection', checked: true},
    {id: 2, name: 'Cocola', checked: false},
    {id: 3, name: 'Ifad', checked: false},
    {id: 4, name: 'Kazi Farmas', checked: false},
    {id: 5, name: 'Individual Callection', checked: true},
    {id: 6, name: 'Cocola', checked: false},
    {id: 7, name: 'Ifad', checked: false},
    {id: 8, name: 'Kazi Farmas', checked: false},
  ];
  public subCategory_ids: any = [];
  public brand_ids: any = [];
  public showMoreCategory: boolean;
  public showMoreBrand: boolean;
  public countList = 5;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  filterCategory(subCategory: SubCategory) {

    subCategory.checked = !subCategory.checked;

    if (subCategory.checked) {
      this.subCategory_ids.push(subCategory.id);
    } else {
      this.subCategory_ids = this.subCategory_ids.filter((id: any) => id !== subCategory.id);
    }
  }

  filterBrand(brand: Brand) {
    brand.checked = !brand.checked;

    if (brand.checked) {
      this.brand_ids.push(brand.id);
    } else {
      this.brand_ids = this.brand_ids.filter((id: any) => id !== brand.id);
    }
  }

  close() {
    this.modalController.dismiss();
  }

}
