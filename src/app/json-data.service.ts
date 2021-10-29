import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class JsonDataService {
  constructor(private http: HttpClient) {}

  getJsonData() {
    return this.http.get<{ anwendung: string; icompany: string }[]>(
      '/assets/data_copy.json'
    );
  }
}
