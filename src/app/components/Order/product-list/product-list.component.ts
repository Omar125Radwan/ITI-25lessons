import { ProductsService } from './../../../services/products.service';
import { StaticProductsService } from './../../../services/static-products.service';
import { ICategory } from './../../../Models/icategory';
import { IProduct } from './../../../Models/iproduct';
import { Component, Input,EventEmitter, OnInit, OnChanges, SimpleChanges, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {
  orderDate: Date;
  // prdList: IProduct[] = [];
  prdListOfCat: IProduct[] = [];
  @Input() sentCatID: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>;
  orderTotalPrice: number = 0;
  constructor(
              // private staticPrdService: StaticProductsService,
              private router: Router,
              private prdService: ProductsService) {
    this.totalPriceChanged = new EventEmitter<number>();
    this.orderDate = new Date();
    // this.prdListOfCat = this.prdList;
  }

  ngOnChanges(): void {
    // this.filterProductsByCatID();
    // this.prdListOfCat = this.staticPrdService.getProductByCatID(this.sentCatID);
    this.prdService.getProductsByCatID(this.sentCatID)
    .subscribe((products) => {
      this.prdListOfCat = products;
    });
  }

  ngOnInit(): void {
    // this.prdListOfCat = this.staticPrdService.getAllProducts();
    this.prdService.getAllProducts().subscribe((products) => {
      this.prdListOfCat = products;
    })
  }


  buy(prdPrice: number, count: string) {
    this.orderTotalPrice += +count * prdPrice;
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }

  // changeCat() {
  //   this.selectedCatID = 1;
  // }

  prdTrackByFn(index: number, prd: IProduct): number {
    return prd.id;
  }

  // private filterProductsByCatID() {

  // }
  openPrdDetails(prdID: number, prdName: string) {
    // this.router.navigateByUrl('/Products/' + prdID); // String
    this.router.navigate(['/Products', prdID]).then(() => {
      alert(`You go for Product ${prdName}`);
    }) // Promise Array
  }
}
