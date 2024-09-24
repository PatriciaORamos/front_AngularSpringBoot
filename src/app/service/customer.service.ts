import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private url:string="http://localhost:8080";


  constructor(private http:HttpClient) { }


  add(obj:Customer):Observable<Customer>{
    return this.http.post<Customer>(this.url, obj)
  }

  select():Observable<Customer[]>{
    return  this.http.get<Customer[]>(this.url);
  }

  edit(obj:Customer):Observable<Customer>{
    return this.http.put<Customer>(this.url, obj)
  }

  remove(id:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + id)
  }

}
