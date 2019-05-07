import { Order } from './../models/order';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  private api = environment.apiEndPoint + "orders";
  constructor(private http: HttpClient) {}

  create(order): Observable<Number> {
    return this.http.post<Number>(this.api, order);
  }

  searchWithPage(from,to,pageNum):Observable<Order[]> {
    return this.http.get<Order[]>(this.api + "/search?from=" + from +"&to=" + to + "&pageNum=" + pageNum);
  }
  search(from,to):any {
    return this.http.get<any>(this.api + "?from=" + from + "&to=" + to);
  }
  complete(id):Observable<Number> {
    return this.http.put<Number>(this.api + `/complete?id=${id}`,null);
  }
  cancel(id):Observable<Number> {
    return this.http.put<Number>(this.api + `/cancel?id=${id}`,null);
  }
}
