import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: Array<any>;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.itemsMenu().subscribe(response => {
      this.menu = response.menu;
    });
  }
}
