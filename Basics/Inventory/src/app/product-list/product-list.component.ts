import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
@Input() ProductList: Product[];
@Output() onProductSelected: EventEmitter<Product>;
private currentProduct : Product;

  constructor() {
  	this.onProductSelected = new EventEmitter()
   }

  ngOnInit() {
  }

  productWasSelected(product: Product): void { 
  	console.log('Product clicked: ', product);
	}

	clicked(product:Product){
		 this.currentProduct = product; 
		 this.onProductSelected.emit(product);
		 return false;
	}

}
