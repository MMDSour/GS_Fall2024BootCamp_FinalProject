export interface User {
  id: number;
  firstName: string;
  lastName: string;
  nationalCode:number;
  phoneNumber: string;
  username: string;
  password: string;
  role: userRole;
}

export const userHeaders :string[] = [
  'id',
  'firstName',
  'lastName',
  'nationalCode',
  'phoneNumber',
  'username',
  'role',
  'actions'
];

export const userAddFormTemplate: any[] = [
  { key: 'firstName', label: 'First Name', type: 'text',
    validations: { required: true, noWhitespace: true , noSymbol: true}, },
  { key: 'lastName', label: 'Last Name', type: 'text',
    validations: { required: true , noWhitespace: true, noSymbol: true}, },
  { key: 'nationalCode', label: 'National Code', type: 'number',
    validations: { required: true, exactLength: 10, noWhitespace: true, errorMessage: 'National Code is not valid' } },
  { key: 'phoneNumber', label: 'Phone Number', type: 'text',
    validations: { required: true, phoneNumber: true, noWhitespace: true, errorMessage: 'Phone number is not valid' } },
  { key: 'username', label: 'Username', type: 'text',
    validations: { required: true , noSymbol: true, noWhitespace: true} },
  { key: 'password', label: 'Password', type: 'text',
    validations: { required: true, minlength: 6 , noWhitespace: true} },
  { key: 'role', label: 'Role', type: 'select',
    validations: { required: true, noWhitespace: true, options: [ { label: 'User', value: 'user' }, { label: 'Admin', value: 'admin' } ] } },
];

export const userEditFormTemplate = [
  { key: 'firstName', label: 'First Name', type: 'text', value:'',
    validations: { required: true, noWhitespace: true , noSymbol: true}, },
  { key: 'lastName', label: 'Last Name', type: 'text', value:'',
    validations: { required: true , noWhitespace: true, noSymbol: true}, },
  { key: 'nationalCode', label: 'National Code', type: 'number', value:'',
    validations: { required: true, exactLength: 10, noWhitespace: true, errorMessage: 'National Code is not valid' } },
  { key: 'phoneNumber', label: 'Phone Number', type: 'text', value:'',
    validations: { required: true, phoneNumber: true, noWhitespace: true, errorMessage: 'Phone number is not valid' } },
  { key: 'password', label: 'Password', type: 'text', value:'',
    validations: { required: true, minlength: 6 , noWhitespace: true} },
  { key: 'role', label: 'Role', type: 'select', value:'',
    validations: { required: true, noWhitespace: true, options: [ { label: 'User', value: 'user' }, { label: 'Admin', value: 'admin' } ] } },
];


export const userLoginFormTemplate = [
  { key: 'username', label: 'Username', type: 'text',
    validations: { required: true } },
  { key: 'password', label: 'Password', type: 'text',
    validations: { required: true } },
];

export enum userRole {
  USER = 0,
  ADMIN = 1
}
