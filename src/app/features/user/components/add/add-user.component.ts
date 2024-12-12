import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormComponent} from '../../../../shared/components/form/form.component';
import {userTemplate} from '../../../../core/models/user/user.model';

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


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
    userTemplate.forEach((field) => {
      const controlValidators = [];
      if (field.validations?.required) controlValidators.push(Validators.required);
      if (field.validations?.minlength) controlValidators.push(Validators.minLength(field.validations.minlength));
      if (field.validations?.pattern) controlValidators.push(Validators.pattern(field.validations.pattern));
      this.form.addControl(field.key, this.fb.control('', controlValidators));
    });
  }

  protected readonly userTemplate = userTemplate;
}
