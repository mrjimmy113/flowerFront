import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Banner } from '../models/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private api = environment.apiEndPoint + "admin/banner";
  constructor(private http:HttpClient) { }

  create(banner):Observable<Number> {
    return this.http.post<Number>(this.api,banner);
  }
  getAll():Observable<Banner> {
    return this.http.get<Banner>(this.api);
  }
  delete(id):Observable<Number> {
    return this.http.delete<Number>(this.api + "/" + id);
  }
}
