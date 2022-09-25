import { Subscription } from 'rxjs';
import { IProduct } from './../../../Models/iproduct';
import { StaticProductsService } from './../../../services/static-products.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnChanges {
  currPrdID: number = 0;
  prd: IProduct | null = null;
  prdIDsArr: number[] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private prdService: StaticProductsService,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {
    // console.log(this.currPrdID);
    this.prdIDsArr = this.prdService.getPrdIDs();
    //* When navigate to same component, Will not reload component
    //* even if there's changes in the route parameters.
    this.activatedRoute.paramMap.subscribe((paramMap) =>  {
      this.currPrdID = Number (paramMap.get('pid'));
      this.prd = this.prdService.getProductById(this.currPrdID);
    });
  }

  ngOnChanges(): void {

  }

  goBack() {
    this.location.back();
  }

  goProducts() {
    this.router.navigateByUrl('/Products');
  }

  prevPrd() {
    let currIndex = this.prdIDsArr.findIndex(elem => elem == this.currPrdID);
    if (currIndex > 0) {
      let prevPrdID = this.prdIDsArr[currIndex - 1];
      this.router.navigate(['/Products', prevPrdID]);
    }
  }
  nextPrd() {
    let currIndex = this.prdIDsArr.findIndex(elem => elem == this.currPrdID);
    let nextPrdID;
    if (currIndex < this.prdIDsArr.length) {
      nextPrdID = this.prdIDsArr[currIndex + 1];
      this.router.navigate(['/Products', nextPrdID]);
    }
  }

}
