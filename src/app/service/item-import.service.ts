import { ItemImport } from './../models/itemImport';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemImportService {

  private api = environment.apiEndPoint + "itemImport";

  constructor(private http:HttpClient) { }

  create(itemImport) : Observable<Number> {
    return this.http.post<Number>(this.api,itemImport);
  }
  searchWithPage(from,to,pageNum):Observable<ItemImport[]> {
    return this.http.get<ItemImport[]>(this.api + "/search?from=" + from +"&to=" + to + "&pageNum=" + pageNum);
  }
  search(from,to):any {
    return this.http.get<any>(this.api + "?from=" + from + "&to=" + to);
  }
}
