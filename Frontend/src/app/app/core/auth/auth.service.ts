import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = ''; // Replace with your actual backend URL
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')!));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Login method: To authenticate the user and store the token
  login(username: string, password: string): Observable<any> {
    return of(null);
  }

  // Get the current logged-in user
  get currentUserValue(): any {
    return "";
  }

  // Logout method: Removes the token from local storage
  logout(): void {
  }
}
