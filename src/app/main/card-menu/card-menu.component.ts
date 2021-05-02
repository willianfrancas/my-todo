import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent implements OnInit {

  carditem: Array<any> = [
    { icon: 'fas fa-suitcase-rolling', listname: 'Trip', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { icon: 'fas fa-tshirt', listname: 'Shopping', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { icon: 'fas fa-shopping-cart', listname: 'Market', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { icon: 'fab fa-amazon', listname: 'Amazon', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { icon: 'fas fa-toilet', listname: 'Toilet', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { icon: 'fas fa-film', listname: 'Movies', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { icon: 'fas fa-book', listname: 'Books', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
