import { FlowerImport } from './../models/flowerImport';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowerImportService {
  private api = environment.apiEndPoint + "flowerImport/";
  constructor(private http:HttpClient) { }

  create(flowerImport) :Observable<Number> {
    return this.http.post<Number>(this.api,flowerImport);
  }
  searchWithPage(from,to,pageNum):Observable<FlowerImport[]> {
    return this.http.get<FlowerImport[]>(this.api + "/search?from=" + from +"&to=" + to + "&pageNum=" + pageNum);
  }
  search(from,to):any {
    return this.http.get<any>(this.api + "?from=" + from + "&to=" + to);
  }
}
