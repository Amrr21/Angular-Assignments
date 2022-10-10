import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged: boolean;
  constructor(private userauth: UserAuthService) {
    this.isLogged = this.userauth.isUserLogged;
    console.log(this.isLogged)

  }
  navTaps = ["Home", "Products", "Order"]
  dircs = ["Home", "Products", "Order"]
  ngOnInit(): void {
    this.userauth.getStatus().subscribe(status =>
      this.isLogged = status)
    console.log(this.isLogged)

  }

}
