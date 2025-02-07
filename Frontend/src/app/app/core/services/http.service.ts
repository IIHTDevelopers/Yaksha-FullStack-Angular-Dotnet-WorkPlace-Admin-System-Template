import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get<T>(url: string): any {
    // write your logic here
    return null;
  }

  post<T>(url: string, body: any): any {
    // write your logic here
    return null;
  }

  put<T>(url: string, body: any): any {
    // write your logic here
    return null;
  }

  delete<T>(url: string): any {
    // write your logic here
    return null;
  }
}
