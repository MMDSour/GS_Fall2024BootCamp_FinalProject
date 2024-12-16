import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserAdminPipe} from '../../pipes/user-admin.pipe';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'table-component',
  imports: [
    UserAdminPipe,
    NgOptimizedImage
  ],
  templateUrl: './table.component.html',
  standalone: true,
  styleUrl: './table.component.scss'
})

export class TableComponent {
  @Input()
  headers: string[] = [];
  @Input()
  data: any[] = [];
  @Output()
  deleteRow = new EventEmitter();

  onDelete = (row: any) => {
    this.deleteRow.emit(row);
    this.data.splice(this.data.indexOf(row), 1);
  }
}
