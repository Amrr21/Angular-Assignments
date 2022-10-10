import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  private adsList: string[] = []
  constructor() {
    this.adsList = [
      "Ads 1",
      "Ads 2",
      "Ads 3",
      "Ads 4",
      ""
    ]
  }
  getAds(time: number): Observable<string> {
    return new Observable<string>((observer) => {
      let counter = 0;
      let adsTime = setInterval(() => {
        observer.next(this.adsList[counter])

        if (counter == this.adsList.length) {
          observer.complete()
        }

        if (this.adsList[counter] == "") {
          observer.error("Error")
        }

        counter++
      }, time * 1000)
      return {
        unsubscribe() {
          clearInterval(adsTime)
        }
      }

    })


  }

}
