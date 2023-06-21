import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model';

const baseUrl = 'http://localhost:5000/api/products/'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAll() : Observable<Products[]>{
    return this.http.get<Products[]>(baseUrl)
  }

  get(id : any) : Observable<Products>{
    return this.http.get<Products>(`${baseUrl}/${id}`)
  }

  create(data:any) : Observable<any>{
    return this.http.post(baseUrl,data)
  }

  update(data:any) : Observable<any>{
    return this.http.patch(`${baseUrl}`,{
      id : data._id,
      name : data.name,
      price : data.price,
      quantity : data.quantity,
      description : data.description
    })
  }

  delete(id:any) : Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`)
  }

}
