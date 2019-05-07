import { AuthenticationService } from './authentication.service';
import { Account } from './../models/account';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccService {
  private api = environment.apiEndPoint;
  private apiName = "acc";
  constructor(private http:HttpClient, private authSer:AuthenticationService) { }

  create(account):Observable<Number> {
    return this.http.post<Number>(this.api + this.apiName, account);
  }
  checkUsername(username):Observable<boolean> {
    return this.http.get<boolean>(this.api + this.apiName + "/checkUsernameExist/" + username);
  }
  checkEmail(email):Observable<boolean>{
    return this.http.get<boolean>(this.api + this.apiName + `/checkEmailExist?email=${email}`);
  }
  searchWithPage(searchTerm,pageNum):Observable<Account[]> {
    return this.http.get<Account[]>(this.api + "admin/" + this.apiName +"/search?searchTerm=" + searchTerm + "&pageNum=" + pageNum, this.authSer.getAuthHeader());
  }
  search(searchTerm):any {
    return this.http.get<any>(this.api + "admin/" + this.apiName + "?searchTerm=" + searchTerm);
  }
  setRole(username, role) :Observable<Number> {
    return this.http.put<Number>(this.api + "admin/" + this.apiName + `/updateAccountRole?username=${username}&role=${role}`,null);
  }
  delete(id):Observable<Number> {
    return this.http.delete<Number>(this.api + "admin/" + this.apiName + `/${id}`);
  }
  getProfile():Observable<Account> {
    return this.http.get<Account>(this.api + "user/" + this.apiName + "/getAccountInfo");
  }
  updateProfile(account) :Observable<Account> {
    return this.http.post<Account>(this.api + "user/" + this.apiName + "/updateProfile",account);
  }
  changePass(password):Observable<Number> {
    return this.http.post<Number>(this.api + "user/" + this.apiName + "/changePass", password);
  }
  recoveryPass(email):Observable<Boolean> {
    return this.http.put<Boolean>(this.api + `forgetPass?email=${email}`,null);
  }
}
