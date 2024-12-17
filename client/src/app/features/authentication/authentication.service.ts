import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationServiceService {
  constructor(private http: HttpClient, private userService: UserService ) {}

  loginApi = (user: {username: string, password: string}) =>{
    this.http.post("http://localhost:3000/api/auth", user, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          localStorage.setItem('authToken', response);
          this.userService.GetCurrentUser().subscribe({
            next: (response) => {
              localStorage.setItem('role', response.role);
            }
          })
        },
        error: (err) => {
          console.error("Error occurred:", err);
        }
      });
  }
}
