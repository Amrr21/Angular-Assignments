import { PromotionAdsService } from './../../Services/promotion-ads.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  //  private subscriptions !: Subscription[];

  advertisement: string = 'Hurry Up Offers!';

  constructor(private promoAds: PromotionAdsService) {}

  ngOnInit(): void {
    const observer = {
      next: (ad: any) => {
        this.advertisement = ad;
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log('Ads Finishied');
      },
    };
    let adsSub = this.promoAds.getSechduleAds(3).subscribe(observer);
    this.subscriptions.push(adsSub);
  }
  ngOnDestroy(): void {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
