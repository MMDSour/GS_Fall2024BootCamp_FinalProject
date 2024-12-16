import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'userAdmin'
})
export class UserAdminPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value === 1) {
      return 'admin';
    } else if (value === 0) {
      return 'user';
    } else {
      return 'Invalid';
    }
  }
}
