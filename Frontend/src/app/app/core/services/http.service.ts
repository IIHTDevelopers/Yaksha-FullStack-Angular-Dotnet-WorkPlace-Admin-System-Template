import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // Generic GET method
  get<T>(url: string): any {
    // write your logic here
    return null;
  }

  // Generic POST method
  post<T>(url: string, body: any): any {
    // write your logic here
    return null;
  }

  // Generic PUT method
  put<T>(url: string, body: any): any {
    // write your logic here
    return null;
  }

  // Generic DELETE method
  delete<T>(url: string): any {
    // write your logic here
    return null;
  }
}
