import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormComponent} from '../../../../shared/components/form/form.component';
import {userRole, userFormTemplate} from '../../../../core/models/user/user.model';
import {UserService} from '../../user.service';
import {PhoneNumberValidator} from '../../../../shared/validators/phone-number-validator.validation';
import {numberLengthValidator} from '../../../../shared/validators/number-length-validator.validation';
import {noAtSymbolValidator} from '../../../../shared/validators/no-at-symbol-validator.validation';
import {noWhitespaceValidator} from '../../../../shared/validators/no-whitespace-validator.validation';

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

  form!: FormGroup;


  constructor(private fb: FormBuilder, public userService: UserService) {
    this.form = this.fb.group({});
    userFormTemplate.forEach((field) => {
      const controlValidators = [];
      if (field.validations?.required) controlValidators.push(Validators.required);
      if (field.validations?.minlength) controlValidators.push(Validators.minLength(field.validations.minlength));
      if (field.validations?.phoneNumber) controlValidators.push(PhoneNumberValidator());
      if (field.validations?.exactLength) controlValidators.push(numberLengthValidator(field.validations.exactLength));
      if (field.validations?.noAtSymbol) controlValidators.push(noAtSymbolValidator());
      if (field.validations?.noWhitespace) controlValidators.push(noWhitespaceValidator());
      this.form.addControl(field.key, this.fb.control('', controlValidators));
    });
  }

  addUser = (e: any) => {
    if (e.isAdmin === 'user')
      e.isAdmin = userRole.USER;
    else if (e.isAdmin === 'admin')
      e.isAdmin = userRole.ADMIN;
    else
      return;
    this.userService.AddUser(e);
  }

  protected readonly userTemplate = userFormTemplate;
}
