import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../json-data.service';

@Component({
  selector: 'app-json-data',
  templateUrl: './json-data.component.html',
  styleUrls: ['./json-data.component.scss'],
})
export class JsonDataComponent implements OnInit {
  data = this.dataService.getJsonData();

  constructor(
    private dataService: JsonDataService,
  ) {}

  ngOnInit(): void {}
}
