import { ProductListComponent } from './../product-list/product-list.component';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit, AfterViewInit {
  catList: ICategory[] = [];
  selectedCatID: number = 0;
  recivedOrderTotalPrice: number = 0;

  // clientNameInpElem: ElementRef = new ElementRef();
  // clientNameInpElem: ElementRef = {} as ElementRef;
  // clientNameInpElem: ElementRef | undefined = undefined;
  // clientNameInpElem: ElementRef | null = null;
  // clientNameInpElem?: ElementRef; optinal
  @ViewChild('clientNameInp') clientNameInpElem!: ElementRef; // Non null
  @ViewChild(ProductListComponent) prdListCompObj!: ProductListComponent;
  constructor() {
    this.catList = [
      {id: 1, name: 'Laptops'},
      {id: 2, name: 'Tablets'},
      {id: 3, name: 'Mobiles'},
    ];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.clientNameInpElem.nativeElement.value = "Your Name Here";
    this.clientNameInpElem.nativeElement.style.border = "2px solid red";
    // console.log(this.prdListCompObj.prdList);
  }

  filterProductsByCatID(){
  }

  onTotalPriceChanged(totalPrice: number) {
    this.recivedOrderTotalPrice = totalPrice;
  }

  compeleteOrder() {
    // this.prdListCompObj.prdList[0].quantity -= 1;
  }

}
