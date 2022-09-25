import { IProduct } from './../Models/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  prdList: IProduct[];
  constructor() {
    this.prdList = [
      { id: 100, name: 'Lenovo laptop', price: 100000, quantity: 1, imgURL: 'https://fakeimg.pl/250x100/', categoryID: 1 },
      { id: 200, name: 'Apple laptop', price: 2007780, quantity: 0, imgURL: 'https://fakeimg.pl/250x100/', categoryID: 1 },
      { id: 300, name: 'Lenovo Tab 2', price: 3000, quantity: 10, imgURL: 'https://fakeimg.pl/250x100/', categoryID: 2 },
      { id: 400, name: 'Samsung Tab 2', price: 40.5, quantity: 2, imgURL: 'https://fakeimg.pl/250x100/', categoryID: 2 },
      { id: 500, name: 'Samsung Note 10', price: 5000, quantity: 0, imgURL: 'https://fakeimg.pl/250x100/', categoryID: 3 },
      { id: 600, name: 'Samsung S22 Ultra', price: 600, quantity: 1, imgURL: 'https://fakeimg.pl/250x100/', categoryID: 3 },
    ]
  }
  getAllProducts(): IProduct[] {
    return this.prdList;
  }
  getProductByCatID(cID: number): IProduct[] {
    if(cID == 0) {
      return this.prdList;
    } else {
      return this.prdList.filter(prd => prd.categoryID == cID);
    }
  }
  getProductById(pID:number): IProduct | null {
    let foundProduct = this.prdList.find(prd => prd.id == pID);
    return foundProduct? foundProduct: null;
  }
  addNewProduct(prd: IProduct):void {
    this.prdList.push(prd);
  }
  getPrdIDs(): number[] {
    let prdIDs: number[] = this.prdList.map(prd => prd.id);
    return prdIDs;
  }
}
