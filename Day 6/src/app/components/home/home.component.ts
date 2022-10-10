import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdsService } from 'src/app/services/ads.service';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscripe: Subscription[] = [];
  isUserLogged: boolean = false
  constructor(private adsService: AdsService, private userauth: UserAuthService) { }

  ngOnInit(): void {
    this.subscripe.push(this.adsService.getAds(2).subscribe({
      next: (data: string) => {
        console.log(data)
      },
      error: (err: string) => {
        console.log(err)
      },
      complete: () => {
        console.log("complete")
      }
    }))
  }


  ngOnDestroy(): void {
    this.subscripe[0].unsubscribe()
  }

  login() {
    this.userauth.login("username", "password")
    this.isUserLogged = this.userauth.isUserLogged
  }

  logout() {
    this.userauth.logout()
    this.isUserLogged = this.userauth.isUserLogged
  }
}
