import { catchError, filter, map, retry, Subscription, take } from 'rxjs';
import { PromotionAdsService } from './../../services/promotion-ads.service';
import { StoreData } from './../../ViewModels/store-data';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  storeInfo: StoreData;
  isImageShown: boolean = true;
  constructor(private promoAds: PromotionAdsService) {
    this.storeInfo = new StoreData('Omar Store',
      'https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg',
      ['Cairo', 'Alex', 'Sohag'])
  }


  ngOnInit(): void {
    let observer = {
      next: (data: string) => {
        console.log(data);
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Ads Finished");
      }
    };
    // this.promoAds.getScheduledAds(3).subscribe(observer);

    // this.promoAds.getScheduledAds(3).subscribe(
    //   (data) => {
    //     console.log(data);
    //   }
    // )

    // this.subscription = this.promoAds.getScheduledAds(3).subscribe
    // this.subscription.push(this.promoAds.getScheduledAds(3).subscribe

    let filterObserver = this.promoAds.getScheduledAds(3).pipe(
      filter(ad => ad.includes("white Friday")),
      map(ad => "Ad: " + ad),
    );
    // let filterObserver = this.promoAds.getScheduledAds(3).pipe(
    //   retry(3),
    // );
    /*next: (data: string) => {
      console.log(data);
    },
    error: (err: string) => {
      console.log(err);
    },
    complete:() => {
      console.log("Ads Finished");
      }
    }*/
    // adsSubscription.unsubscribe();
    let adsSubscription = filterObserver.subscribe(observer);
    this.subscriptions.push(adsSubscription);

    // let sub = this.promoAds.getSerialAds().subscribe(ad => {
    //   console.log(ad);
    // })

    // this.subscriptions.push(sub);

  }


  toggleImage() {
    this.isImageShown = !this.isImageShown;
  }



  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

}
