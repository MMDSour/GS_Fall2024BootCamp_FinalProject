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

export const userFormTemplate = [
  { key: 'firstName', label: 'First Name', type: 'text',
    validations: { required: true, noWhitespace: true } },
  { key: 'lastName', label: 'Last Name', type: 'text',
    validations: { required: true , noWhitespace: true} },
  { key: 'nationalCode', label: 'National Code', type: 'number',
    validations: { required: true, exactLength: 10, noWhitespace: true, errorMessage: 'National Code is not valid' } },
  { key: 'phoneNumber', label: 'Phone Number', type: 'number',
    validations: { required: true, phoneNumber: true, noWhitespace: true, errorMessage: 'Phone number is not valid' } },
  { key: 'username', label: 'Username', type: 'text',
    validations: { required: true , noAtSymbol: true, noWhitespace: true} },
  { key: 'password', label: 'Password', type: 'text',
    validations: { required: true, minlength: 6 , noWhitespace: true} },
  { key: 'isAdmin', label: 'Role', type: 'select',
    validations: { required: true, noWhitespace: true, options: [ { label: 'User', value: 'user' }, { label: 'Admin', value: 'admin' } ] } },
];

export enum userRole {
  USER = 0,
  ADMIN = 1
}
