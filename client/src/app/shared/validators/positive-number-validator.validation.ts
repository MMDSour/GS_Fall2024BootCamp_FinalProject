import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const positiveNumberValidator = () => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value <= 0) {
      return { positiveNumber: "this field has to be positive number." };
    }
    return null;
  };
}
