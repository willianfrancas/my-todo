import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { UserModel } from '../auth/login/user.model';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: Array<any>;
  authenticated$: Observable<boolean>;
  user$: Observable<UserModel>;

  constructor(private headerService: HeaderService, private router: Router, private authService: AuthService) {
    this.authenticated$ = this.authService.isAuthenticated();
    this.user$ = this.authService.getUser();
  }

  ngOnInit(): void {
    this.headerService.itemsMenu().subscribe(response => {
      this.menu = response.menu;
    });
  }

  logout() {
    this.router.navigateByUrl('/login');
    this.authService.logout();
  }
}
