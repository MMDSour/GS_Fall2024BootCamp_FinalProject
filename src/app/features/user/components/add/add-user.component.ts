import { Component } from '@angular/core';
import {FormComponent} from '../../../../shared/components/form/form.component';
import {userRole, userAddFormTemplate} from '../../../../core/models/user/user.model';
import {UserService} from '../../user.service';

@Component({
  selector: 'add',
  imports: [
    FormComponent
  ],
  templateUrl: './add-user.component.html',
  standalone: true,
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  constructor(public userService: UserService) {}

  addUser = (e: any) => {
    if (e.isAdmin === 'user')
      e.isAdmin = userRole.USER;
    else if (e.isAdmin === 'admin')
      e.isAdmin = userRole.ADMIN;
    else
      return;
    this.userService.AddUser(e);
  }

  protected readonly userTemplate = userAddFormTemplate;
}
