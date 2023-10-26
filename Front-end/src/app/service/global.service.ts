import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }
  getposts(): Observable<any> {
    return this.http.get('http://localhost:3000/apiTask');
  }
  getSinglePost(id:any):Observable<any> {
    return this.http.get('http://localhost:3000/apiTask/'+id);
  }
  deletePost(id:any):Observable<any> {
    return this.http.delete('http://localhost:3000/apiItem/admin/deleteTask/'+id);
  }
  getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/apiUser');
  }
  deleteUser(id:any):Observable<any> {
    return this.http.delete('http://localhost:3000/apiUser/'+id)
  }
}
