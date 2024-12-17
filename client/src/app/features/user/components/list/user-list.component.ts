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
  role: boolean = localStorage.getItem('role') === '1'

  constructor(private router: Router, public userService: UserService) {}
  ngOnInit() {
    this.userService.GetAllUsers().subscribe({
      next: (response) => {
        this.users = this.userService.mapResponseToUsers(response);
        if(this.role)
          this.addActions();
      },
      error: (err) => {
        console.error("Error fetching users:", err);
        return [];
      }
    });
  }
  addActions = () => {
    this.users = this.users.map(user => ({
      ...user,
      actions:['Edit', 'Delete']
    }));
  }

  deleteUser = (user:User) => {
    // this.userService.DeleteUser(user);
  }

  protected readonly userHeaders = userHeaders;
}
