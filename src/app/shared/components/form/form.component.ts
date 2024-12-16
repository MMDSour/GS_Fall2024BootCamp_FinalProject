import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PhoneNumberValidator } from '../../validators/phone-number-validator.validation';
import { numberLengthValidator } from '../../validators/number-length-validator.validation';
import {noSymbolValidator} from '../../validators/no-symbol-validator.validation';
import { noWhitespaceValidator } from '../../validators/no-whitespace-validator.validation';

@Component({
  selector: 'form-components',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() template!: any[];
  @Input() navigation?: string = '';
  @Output() submit: EventEmitter<any> = new EventEmitter();

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.template) {
      console.error('Template is required for FormComponent!');
      return;
    }

    this.formGroup = this.fb.group({});

    this.template.forEach((field) => {
      const controlValidators = [];
      if (field.validations?.required) controlValidators.push(Validators.required);
      if (field.validations?.minlength) controlValidators.push(Validators.minLength(field.validations.minlength));
      if (field.validations?.phoneNumber) controlValidators.push(PhoneNumberValidator());
      if (field.validations?.exactLength) controlValidators.push(numberLengthValidator(field.validations.exactLength));
      if (field.validations?.noSymbol) controlValidators.push(noSymbolValidator());
      if (field.validations?.noWhitespace) controlValidators.push(noWhitespaceValidator());
      this.formGroup.addControl(field.key, this.fb.control('', controlValidators));
    });
  }

  public getControl(key: string): FormControl {
    return this.formGroup.get(key) as FormControl;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.formGroup.valid) {
      this.submit.emit(this.formGroup.value);
    } else {
      console.warn('Form is invalid:', this.formGroup.errors);
    }
  }
}
