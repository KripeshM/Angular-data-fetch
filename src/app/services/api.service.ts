import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mydata } from 'src/model/mydata';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  Url:string = 'https://jsonplaceholder.typicode.com/posts';

  getAllData():Observable<Mydata>{
    return this.http.get(this.Url);
  }
}
