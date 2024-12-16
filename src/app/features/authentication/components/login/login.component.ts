import { Component } from '@angular/core';
import {FormComponent} from '../../../../shared/components/form/form.component';
import {AuthenticationServiceService} from '../../authentication.service';
import {userLoginFormTemplate} from '../../../../core/models/user/user.model';

@Component({
  selector: 'login',
  imports: [
    FormComponent
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(public authService: AuthenticationServiceService) {}

  protected readonly template = userLoginFormTemplate;

  login = (e: any) => {
    this.authService.loginApi(e)
  }
}
