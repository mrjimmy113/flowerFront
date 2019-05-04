import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccService {
  private api = environment.apiEndPoint + "acc";
  constructor(private http:HttpClient) { }

  create(account):Observable<Number> {
    return this.http.post<Number>(this.api, account);
  }
  checkUsername(username):Observable<boolean> {
    return this.http.get<boolean>(this.api + "/checkUsernameExist/" + username);
  }
  searchWithPage(searchTerm,pageNum):Observable<Account[]> {
    return this.http.get<Account[]>(this.api + "/search?searchTerm=" + searchTerm + "&pageNum=" + pageNum);
  }
  search(searchTerm):any {
    return this.http.get<any>(this.api + "?searchTerm=" + searchTerm);
  }
  setRole(username, role) :Observable<Number> {
    return this.http.put<Number>(this.api + `/updateAccountRole?username=${username}&role=${role}`,null);
  }
  delete(id):Observable<Number> {
    return this.http.delete<Number>(this.api + `/${id}`);
  }
}
