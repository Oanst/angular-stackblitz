import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../json-data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-json-data',
  templateUrl: './json-data.component.html',
  styleUrls: ['./json-data.component.scss'],
})
export class JsonDataComponent implements OnInit {
  data = this.dataService.getJsonData();
  shipCosts = this.cartService.getShippingPrices();

  constructor(
    private dataService: JsonDataService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}
}
