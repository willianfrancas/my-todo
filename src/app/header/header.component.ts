import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { MenuModel } from '../shared/model/menu.model';
import { UserModel } from '../shared/model/user.model';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: Array<MenuModel> = [];
  authenticated$: Observable<boolean>;
  user$: Observable<UserModel>;
  menu$: Observable<MenuModel[]>;

  constructor(
    private headerService: HeaderService,
    private router: Router,
    private authService: AuthService) {

    this.authenticated$ = this.authService.isAuthenticated();
    this.user$ = this.authService.getUser();
  }

  ngOnInit(): void {
    this.headerService.getMenu()
      .subscribe(response => {
        this.menu = response.menu;
      });
  }

  logout() {
    this.router.navigateByUrl('/login');
    this.authService.logout();
    localStorage.clear();
  }
}
