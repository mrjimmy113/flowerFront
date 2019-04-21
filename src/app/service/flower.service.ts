import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flower } from '../models/flower';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  private api = "flower"
  private updateWithFileAPI = "/updateFile";
  private cl ="cl";


  constructor(private http:HttpClient) { }

  create(flower):Observable<Number> {
    return this.http.post<Number>(environment.apiEndPoint + this.api, flower);
  }

  findAll():Observable<Flower[]>{
    return this.http.get<Flower[]>(environment.apiEndPoint + this.api);
  }
  updateWithFile(flower):Observable<Number>{
    return this.http.post<Number>(environment.apiEndPoint + this.api + this.updateWithFileAPI, flower);
  }
  updateNoFile(flower):Observable<Number>{
    console.log(environment.apiEndPoint + this.api + this.updateWithFileAPI);
    return this.http.get<Number>(environment.apiEndPoint + this.api + this.updateWithFileAPI);
  }
  clmn():Observable<Number>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
      })
    };
    return this.http.get<Number>(environment.apiEndPoint +  this.cl,httpOptions);
  }
}
