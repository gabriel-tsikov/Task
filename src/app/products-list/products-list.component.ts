import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products = [
    {
        "id": 1,
        "product": "Jacket",
        "description": "Denim jacket",
        "size": "s",
        "oldPrice": 28.9,
        "newPrice": 22.5
    },
    {
        "id": 2,
        "product": "T-shirt",
        "description": "Black cotton T-shirt",
        "size": "m",
        "oldPrice": 23.9,
        "newPrice": 23.9
    },
    {
      "id": 3,
      "product": "Switcher",
      "description": "Black cotton switcher",
      "size": "m",
      "oldPrice": 34.5,
      "newPrice": 23.9
    },
    {
      "id": 4,
      "product": "Swim suit",
      "description": "Fast drying swim suit",
      "size": "s",
      "oldPrice": 33.8,
      "newPrice": 27.9
    },
    {
      "id": 5,
      "product": "Switcher",
      "description": "Black cotton switcher",
      "size": "m",
      "oldPrice": 34.5,
      "newPrice": 34.5
    },
    {
      "id": 6,
      "product": "Switcher",
      "description": "Black cotton switcher",
      "size": "m",
      "oldPrice": 34.5,
      "newPrice": 25.9
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
