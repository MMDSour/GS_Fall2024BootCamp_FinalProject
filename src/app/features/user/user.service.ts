import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../core/models/user/user.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environment/environment';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor(private http: HttpClient ) { }

  private userData: any;

  setUserData(data: User) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }

  EditUser = (user: User) => {
    const body = {
      id: this.userData.id,
      firstName: user.firstName,
      lastName: user.lastName,
      nationalCode: user.nationalCode,
      phoneNumber: user.phoneNumber,
      username: this.userData.username,
      password: user.password,
      role: user.role,
    }
    const token = localStorage.getItem('authToken');
    return this.http.put("http://localhost:3000/api/users", body,
      { headers: {authorization: token!},responseType: "text" })
      .subscribe({
        error: (err) => {
          console.error("Error editing user:", err);
        }
      });
  }

  GetAllUsers = (): Observable<any>  => {
    const token = localStorage.getItem('authToken');
    return this.http.get("http://localhost:3000/api/users",
      { headers: { authorization: token! }, responseType: "json" })
  }

  GetCurrentUser = (): Observable<any>  => {
    const token = localStorage.getItem('authToken');
    return this.http.get("http://localhost:3000/api/users/current",
      { headers: { authorization: token! }, responseType: "json" })
  }

  // DeleteUser = (user: User) => {
  //   return this.http.delete(`http://localhost:3000/api/users`, {
  //     body: user,
  //   },).subscribe();
  // }

  AddUser = (user: User) => {
    const token = localStorage.getItem('authToken');
    return this.http.post("http://localhost:3000/api/users", user, { headers: {authorization: token!}, responseType: "text" })
      .subscribe({
        error: (err) => {
          console.error("Error adding user:", err);
        }
      });
  };

  mapResponseToUsers(response: any): User[] {
    return Object.entries(response).map(([id, user]: [string, any]) => {
      return {
        id: +id,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        nationalCode: +user.nationalCode || 0,
        phoneNumber: user.phoneNumber || 0,
        username: user.username || '',
        password: user.password || '',
        role: user.role,
      };
    });
  }
}
