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
  getToken():Token {
    return JSON.parse(localStorage.getItem(this.token));
  }
  setToken(token) {
    localStorage.setItem(this.token,JSON.stringify(token));
  }
  getAuthHeader() {
    console.log("Chết mọe Kiều Trọng Khánh");
    var header = {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' +  "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJleHAiOjE1NTcyMjA3OTgsInVzZXJuYW1lIjoiYWRtaW4ifQ.bHmDTQR7ZaSZmkmxeDv3XB9qc9MiyZ1fgCPTrI_IpWg")
    }

    return header;
  }
}
