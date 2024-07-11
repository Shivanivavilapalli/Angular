import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseurl="https://sheetdb.io/api/v1/v107cq9k7jo0f"
  constructor(private http:HttpClient) { }
  onsubmit(register:Register):Observable<any>{
    return this.http.post(this.baseurl,Register);
  }
}
