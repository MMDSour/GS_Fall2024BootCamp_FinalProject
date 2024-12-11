import { FormControl } from '@angular/forms';

export interface addUserForm {
  firstName: FormControl <string>;
  lastName: FormControl <string>;
  nationalCode: FormControl <number>;
  phoneNumber: FormControl <number>;
  username: FormControl <string>;
  password: FormControl <string>;
  isAdmin: FormControl <userRole>;
}

export interface editUserForm {
  firstName: FormControl <string>;
  lastName: FormControl <string>;
  nationalCode: FormControl <number>;
  phoneNumber: FormControl <number>;
  password: FormControl <string>;
  isAdmin: FormControl <userRole>;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  nationalCode:number;
  phoneNumber: number;
  username: string;
  password: string;
  isAdmin: userRole;
}

export const userHeaders :string[] = [
  'id',
  'firstName',
  'lastName',
  'nationalCode',
  'phoneNumber',
  'username',
  'isAdmin',
  'actions'
];

export enum userRole {
  NORMAL = 0,
  ADMIN = 1
}
