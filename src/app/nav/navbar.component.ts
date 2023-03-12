import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html' ,
  styles: ['li > a.active{ color: #F97924; } .nav.navbar-nav {font-size:15px} #searchForm {margin-right: 100px} @media (max-width: 1200 px) {#searchForm {display: none}}']
})
export class NavbarComponent {
  title = 'app';

  constructor(public authService: AuthService){}

}
