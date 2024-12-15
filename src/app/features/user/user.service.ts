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

  GetAllUsers = (): Observable<any[]> => {
    return this.http.get<User[]>("http://localhost:3000/api/users");
  }

  // DeleteUser = (user: User) => {
  //   return this.http.delete(`http://localhost:3000/api/users`, {
  //     body: user,
  //   },).subscribe();
  // }

  AddUser = (user: User) => {
    return this.http.post("http://localhost:3000/api/users", {
      body: user,
      responseType: "text",
    }, ).subscribe();
  }
}
