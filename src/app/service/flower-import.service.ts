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
}
