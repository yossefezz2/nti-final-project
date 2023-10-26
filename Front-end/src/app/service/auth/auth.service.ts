import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  login(user:any):Observable<any> {
    return this.http.post('http://localhost:3000/apiUser/login',user);
  }
  addUser(user:any):Observable<any> {
    return this.http.post('http://localhost:3000/apiUser/res',user);
  }
  addItem(item:any):Observable<any> {
    return this.http.post('http://localhost:3000/apiItem/admin/addTaskImg',item);
  }
  getManyPost():Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }
  getSinglePost(id:any):Observable<any> {
    return this.http.get('http://localhost:3000/apiTask/'+id);
  }
  UpdateItem(item:any,id:any):Observable<any> {
    return this.http.put('http://localhost:3000/apiItem/admin/editTask/'+id,item);
  }
}
