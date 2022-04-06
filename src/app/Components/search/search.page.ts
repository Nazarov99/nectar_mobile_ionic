import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public scroll = false;

  categories = [
    {name: 'Frash Fruits & Vegetable', image: 'assets/category/category-1.png'},
    {name: 'Cooking Oil & Ghee', image: 'assets/category/category-2.png'},
    {name: 'Meat & Fish', image: 'assets/category/category-3.png'},
    {name: 'Bakery & Snacks', image: 'assets/category/category-4.png'},
    {name: 'Dairy & Eggs', image: 'assets/category/category-5.png'},
    {name: 'Beverages', image: 'assets/category/category-6.png'},
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  productCategory() {
    this.router.navigate(['product-category']);
  }

  onScroll(event) {
    if (event.detail.deltaY > 0) {
      this.scroll = true;
    } else if (event.detail.deltaY < 0) {
      this.scroll = false;
    }
  }

}
