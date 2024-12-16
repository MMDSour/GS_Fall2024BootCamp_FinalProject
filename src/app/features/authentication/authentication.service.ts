import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AuthenticationServiceService {
  constructor(private http: HttpClient ) {}

  loginApi = (user: {username: string, password: string}) =>{
    this.http.post("http://localhost:3000/api/auth", user, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          localStorage.setItem('authToken', response);
        },
        error: (err) => {
          console.error("Error occurred:", err);
        }
      });
  }
}
