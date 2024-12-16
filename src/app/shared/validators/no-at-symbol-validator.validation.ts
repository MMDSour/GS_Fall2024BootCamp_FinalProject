import {AbstractControl, ValidationErrors} from '@angular/forms';

export const noAtSymbolValidator = () => {
  return (control: AbstractControl): ValidationErrors | null => {
    return !control.value.includes('@') ? null : {atSymbol: 'you can not use @ in '};
  }
}
