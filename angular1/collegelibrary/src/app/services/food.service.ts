import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseurl="https://sheetdb.io/api/v1/w0bb5py6efog6";
  constructor( private http:HttpClient) { }
  onsubmit():Observable<Food[]>{
    return this.http.get<Food[]>(this.baseurl)
  }
}
