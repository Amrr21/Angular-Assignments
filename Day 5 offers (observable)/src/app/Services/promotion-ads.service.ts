import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionAdsService {
  private adsArr: string[];
  constructor() {
    this.adsArr = [
      ' buy one, get two ',
      ' Free Gift with Purchase ',
      ' limited time offer',
      ' Flash sale ',
    ];
  }

  getSechduleAds(intervalInSeconds: number) {
    return new Observable((observer) => {
      let counter = 0;
      let adsTimer = setInterval(() => {
        if (counter == this.adsArr.length) {
          observer.complete();
        }
        if (this.adsArr[counter] === ' ') {
          observer.error('Error: no offers');
        }
        observer.next(this.adsArr[counter]);
        counter++;
      }, intervalInSeconds * 1500);
    });
  }
}
