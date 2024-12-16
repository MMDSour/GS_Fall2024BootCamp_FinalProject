import {AbstractControl, ValidationErrors} from '@angular/forms';

export const noSymbolValidator = () => {
  return (control: AbstractControl): ValidationErrors | null => {
    return !/[^a-zA-Z0-9]/.test(control.value) ? null : {symbol: 'you can not use symbols in '};
  }
}
