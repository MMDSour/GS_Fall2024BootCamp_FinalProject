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
      firstName: user.firstName || this.userData.firstName,
      lastName: user.lastName || this.userData.lastName,
      nationalCode: user.nationalCode || this.userData.nationalCode,
      phoneNumber: user.phoneNumber || this.userData.phoneNumber,
      username: this.userData.username,
      password: user.password || this.userData.password,
      role: user.role || this.userData.role,
    }
    const token = localStorage.getItem('authToken');
    return this.http.put(`${environment.apiBaseUrl}users`, body,
      { headers: {authorization: token!},responseType: "text" })
      .subscribe({
        error: (err) => {
          console.error("Error editing user:", err);
        }
      });
  }

  GetAllUsers = (): Observable<any>  => {
    const token = localStorage.getItem('authToken');
    return this.http.get(`${environment.apiBaseUrl}users`,
      { headers: { authorization: token! }, responseType: "json" })
  }

  GetCurrentUser = (): Observable<any>  => {
    const token = localStorage.getItem('authToken');
    return this.http.get(`${environment.apiBaseUrl}users/current`,
      { headers: { authorization: token! }, responseType: "json" })
  }

  // DeleteUser = (user: User) => {
  //   return this.http.delete(`http://localhost:3000/api/users`, {
  //     body: user,
  //   },).subscribe();
  // }

  AddUser = (user: User) => {
    const token = localStorage.getItem('authToken');
    return this.http.post(`${environment.apiBaseUrl}users`, user, { headers: {authorization: token!}, responseType: "text" })
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
