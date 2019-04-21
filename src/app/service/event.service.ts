import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private api = environment.apiEndPoint + "event/";
  constructor(private http:HttpClient) { }

  findAll():Observable<Event[]> {
    return this.http.get<Event[]>(this.api);
  }
  create(event):Observable<Number>{
    return this.http.post<Number>(this.api, event);
  }
  update(event):Observable<Number>{
    return this.http.put<Number>(this.api,event);
  }
  delete(id):Observable<Number>{
    return this.http.delete<Number>(this.api + id);
  }
}
