import { Item } from './../models/item';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private api = environment.apiEndPoint + "item/";
  constructor(private http:HttpClient) { }

  findAll():Observable<Item[]> {
    return this.http.get<Item[]>(this.api);
  }
  create(item):Observable<Number>{
    return this.http.post<Number>(this.api, item);
  }
  update(item):Observable<Number>{
    return this.http.put<Number>(this.api,item);
  }
  delete(id):Observable<Number>{
    return this.http.delete<Number>(this.api + id);
  }

}
