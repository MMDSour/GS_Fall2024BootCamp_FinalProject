import {AbstractControl, ValidationErrors} from '@angular/forms';

export const PhoneNumberValidator = () => {
  return (control: AbstractControl): ValidationErrors | null => {
    return /^09\d{9}$/.test(control.value) ? null : {phoneNumber: true};
  }
}
