import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http : HttpClient) { }

  addItem(item:any):Observable<any> {
    console.log(item);
    return this.http.post('http://localhost:3000/apiItem/user/'+item,item);
  }
  getManyPost():Observable<any> {
    return this.http.get('http://localhost:3000/apiItem/user');
  }
  // UpdateItem(item:any,id:any):Observable<any> {
  //   return this.http.put('http://localhost:3000/apiItem/admin/editTask/'+id,item);
  // }
  deletedItem(item:any):Observable<any> {
    
    
    return this.http.delete('http://localhost:3000/apiItem/user/'+item);
  }
  checkItem(item:any):Observable<any> {
    return this.http.post('http://localhost:3000/apiItem/user/checkInvalid/'+item,item);
  }
  getItemsUser():Observable<any> {
    return this.http.get('http://localhost:3000/apiItem/user/');
  }
}
