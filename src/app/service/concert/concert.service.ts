import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(
    private http :HttpClient
  ) { }

  getConcert() {
    return this.http.get('http://localhost:3002/api/concert');
  }

  getConcertByID(id : string) {
    return this.http.get('http://localhost:3002/api/concert/' + id);
  }
}
