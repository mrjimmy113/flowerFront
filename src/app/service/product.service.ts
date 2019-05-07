import { Product } from './../models/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { ProductFlower } from '../models/productFlower';
import { ProductItem } from '../models/productItem';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private api = environment.apiEndPoint + "products";
  constructor(private http:HttpClient) { }

  hello(product) : Observable<Number> {
    return this.http.post<Number>(this.api,product);
  }
  searchWithPage(searchTerm,pageNum):Observable<Product[]> {
    return this.http.get<Product[]>(this.api + "/search?searchTerm=" + searchTerm + "&pageNum=" + pageNum);
  }
  search(searchTerm):any {
    return this.http.get<any>(this.api + "?searchTerm=" + searchTerm);
  }
  getFlowers(id):Observable<ProductFlower[]>{
    return this.http.get<ProductFlower[]>(this.api + "/flowers/" + id);
  }
  getItems(id):Observable<ProductItem[]>{
    return this.http.get<ProductItem[]>(this.api + "/items/" + id);
  }
  update(product) : Observable<Number> {
    return this.http.post<Number>(this.api + "/update",product);
  }
  delete(id) : Observable<Number>{
    return this.http.delete<Number>(this.api + "/" + id);
  }
  getDetail(id):Observable<Product>{
    return this.http.get<Product>(this.api + "/" + id);
  }
  searchBy(event,flower):Observable<any> {
    return this.http.get<any>(this.api + `/searchBy?event=${event}&flower=${flower}`);
  }
  searchByPage(event,flower,pageNum):Observable<Product[]> {
    return this.http.get<any>(this.api + `/searchByPage?event=${event}&flower=${flower}&pageNum=${pageNum}`);
  }
  newestProduct():Observable<Product[]> {
    return this.http.get<Product[]>(this.api + "/newest");
  }
}
