import {AbstractControl, ValidationErrors} from '@angular/forms';

export const noWhitespaceValidator = () => {
  return (control: AbstractControl): ValidationErrors | null => {
    return ! /\s/.test(control.value) ? null : {noWhiteSpace: 'Whitespace is not allowed.'};
  }
}
