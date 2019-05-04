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
}
