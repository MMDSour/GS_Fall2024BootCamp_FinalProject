import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';
import {User, userHeaders} from '../../../../core/models/user/user.model';
import {TableComponent} from '../../../../shared/components/table/table.component';

@Component({
  selector: 'user-list',
  imports: [
    TableComponent,
  ],
  templateUrl: './user-list.component.html',
  standalone: true,
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private router: Router, private userService: UserService) {}
  ngOnInit() {
    this.userService.GetAllUsers().subscribe({
      next: data => {
        this.users = data.map(user => ({
          ...user,               // Copy existing user properties
          actions: ['Edit', 'Delete']        // Add the new field with default or custom values
        }));
      },
      error: err => {
        console.error("error fetching users: ",err);
      }
    })
  }
  deleteUser = (user:User) => {
    // this.userService.DeleteUser(user);
  }

  protected readonly userHeaders = userHeaders;
}
