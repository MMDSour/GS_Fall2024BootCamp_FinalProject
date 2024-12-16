import { AbstractControl, ValidationErrors } from '@angular/forms';

export const numberLengthValidator = (length: number) => {
  return (control: AbstractControl): ValidationErrors | null => {
    return String(control.value).length === length ? null : {exactLength: 'the number length has to be exactly ' + length}
  }
}
