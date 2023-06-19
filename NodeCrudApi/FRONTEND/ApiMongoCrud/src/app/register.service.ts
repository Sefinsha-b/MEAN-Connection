import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 
  constructor(private http: HttpClient) { }
url:string='http://localhost:3000';

PostApi(data:any){
  return this.http.post(this.url + '/api/items', data);
}
}
