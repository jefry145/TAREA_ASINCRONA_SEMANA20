import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<any>(this.url)
  }
}