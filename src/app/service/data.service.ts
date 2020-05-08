import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

const baseUrl = 'http://localhost:8000/api/data';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  data = {
      geo: [],
      text: [],
      hash: undefined
  };
  addGeo(geo) {
    this.data.geo.push(geo);
  }
  addText(text) {
    this.data.text.push(text);
  }
  addHash(hash) {
    this.data.hash = hash;
  }

  postData (data) {
    return this.http.post(baseUrl, data);
  }
}
