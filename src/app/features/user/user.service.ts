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
    console.log(user);
    const token = localStorage.getItem('authToken');
    const headers = {
      authorization: token!
    };
    console.log(headers);
    return this.http.post("http://localhost:3000/api/users", user, { headers: headers, responseType: "text" })
      .subscribe({
        next: (response) => {
          console.log("User added successfully:", response);
        },
        error: (err) => {
          console.error("Error adding user:", err);
        }
      });
  };

  mapResponseToUsers(response: any): User[] {
    return Object.entries(response).map(([id, user]: [string, any]) => {
      return {
        id: Number(id),
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        nationalCode: user.nationalCode || 0,
        phoneNumber: user.phoneNumber || 0,
        username: user.username || '',
        password: user.password || '',
        role: user.role,
      };
    });
  }
}
