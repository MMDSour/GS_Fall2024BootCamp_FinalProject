import {Component, OnInit} from '@angular/core';
import {userEditFormTemplate, userRole} from '../../../../core/models/user/user.model';
import {FormComponent} from '../../../../shared/components/form/form.component';
import {UserService} from '../../user.service';

@Component({
  selector: 'edit-user',
  imports: [
    FormComponent
  ],
  templateUrl: './edit-user.component.html',
  standalone: true,
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent{

  editTemplate = userEditFormTemplate;

  constructor(private userService: UserService) {}

  editUser = (e: any) => {
    if (e.role === 'user')
      e.role = userRole.USER;
    else if (e.role === 'admin')
      e.role = userRole.ADMIN;
    else
      return;
    this.userService.EditUser(e);
  }
}
