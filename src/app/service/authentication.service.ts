import { Token } from './../models/token';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loginAPI = environment.apiEndPoint + "login";
  private token ="TOKEN";
  constructor(private http:HttpClient) { }

  login(account) : Observable<Token> {
    return this.http.post<Token>(this.loginAPI,account);
  }
  logout() {
    localStorage.removeItem(this.token);
  }
  getToken() {
    return localStorage.getItem(this.token);
  }
  setToken(token) {
    localStorage.setItem(this.token,token);
  }
  getAuthHeader() {
    let header = {
      headers: new HttpHeaders()
        .set('Authorization',  this.getToken())
    }
    return header;
  }
}
