import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  constructor(
    private http: HttpClient
  ) { }

  fetchUsersJson(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
