import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '';
  private currentUserSubject!: BehaviorSubject<any>;
  public currentUser!: Observable<any>;

  constructor(private http: HttpClient) {
  }

  // Login method: To authenticate the user and store the token
  login(username: string, password: string): any {
    // write your logic here
    return null;
  }

  // Get the current logged-in user
  get currentUserValue(): any {
    return null;
  }

  // Logout method: Removes the token from local storage
  logout(): void {
  }
}
