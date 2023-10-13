import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http : HttpClient
  ) { }

  getProfile(id : string) {
    return this.http.get('http://localhost:3002/api/profile?' + id);
  }
}
