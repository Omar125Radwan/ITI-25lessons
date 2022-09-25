import { Router } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { IProduct } from './../../Models/iproduct';
import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  catList: ICategory[] = [];
  newPrd: IProduct = {} as IProduct;
  constructor(private prdService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.catList = [
      {id: 1, name: 'Laptops'},
      {id: 2, name: 'Tablets'},
      {id: 3, name: 'Mobiles'},
    ];
  }

  addProduct() {
    const prd: IProduct = {
      name: 'New Tablet',
      price: 300,
      quantity: 10,
      id: 100,
      categoryID: 2,
      imgURL: ''
    }
    const observer = {
      next: (prd: IProduct) => {
        alert("added Product");
        this.router.navigateByUrl('/Products');
      },
      error: (err: Error) => { alert(err.message) },
    }
    this.prdService.addProduct(this.newPrd).subscribe(observer);

  }

}
