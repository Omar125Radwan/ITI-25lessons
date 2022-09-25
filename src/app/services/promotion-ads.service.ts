import { Injectable } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private adsList: string[];
  constructor() {
    this.adsList = ["Big Discounts"
                  , "Sale up to 50%"
                  , "Check our white Friday offers"
                  // , ""
                  , "Special white Friday offers up to 70%"];
  }

  getScheduledAds(intervalInSeconds: number) {
    return new Observable<string>((observer) => {
      //   observer.next();
      //   observer.error();
      //   observer.complete();
      let counter = 0;
      let adsTimer = setInterval(() =>{
        if(counter == this.adsList.length) {
          observer.complete();
        }
        if(this.adsList[counter] == "") {
          observer.error("Error: Empty Ad.");
        }
        observer.next(this.adsList[counter]);
        counter++;
      }, intervalInSeconds * 1000);
      return {
        unsubscribe() {
          // 1- Error
          // 2- Compelete
          // 3- unsubscribe()
          clearInterval(adsTimer);
          console.log('In unsubscribe')
        }
      }
    });
  }
  getSerialAds(): Observable<string> {
    // return of("ad1", "ad2", "ad3"); // list of item
    return from(this.adsList); // Array
  }
}
