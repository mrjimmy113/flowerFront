import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Flower } from "../models/flower";

@Injectable({
  providedIn: "root"
})
export class FlowerService {
  private api = environment.apiEndPoint + "flower";
  private updateWithFileAPI = "/update";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Flower[]> {
    return this.http.get<Flower[]>(this.api + "/all");
  }

  create(flower): Observable<Number> {
    return this.http.post<Number>(this.api, flower);
  }

  findAll(): Observable<any> {
    return this.http.get<any>(this.api + "?searchTerm=");
  }
  update(flower): Observable<Number> {
    return this.http.post<Number>(this.api + this.updateWithFileAPI, flower);
  }
  searchWithPage(searchTerm, pageNum): Observable<Flower[]> {
    return this.http.get<Flower[]>(
      this.api + "/search?searchTerm=" + searchTerm + "&pageNum=" + pageNum
    );
  }
  search(searchTerm): any {
    return this.http.get<any>(this.api + "?searchTerm=" + searchTerm);
  }
  delete(id): Observable<Number> {
    return this.http.delete<Number>(this.api + "/" + id);
  }
  findOne(id):Observable<Flower> {
    return this.http.get<Flower>(this.api + `/one?id=${id}`);
  }
}
