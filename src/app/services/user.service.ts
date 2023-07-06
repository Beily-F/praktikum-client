import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClientModule) { }
  baseUrlUser=`${environment.baseUrl}/user`

  getAllUsers(){
    return this.http.get<
  }
  
  




}
