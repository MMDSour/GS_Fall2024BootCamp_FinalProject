import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserAdminPipe} from '../../pipes/user-admin.pipe';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'table-component',
  imports: [
    UserAdminPipe,
    NgOptimizedImage,
    RouterLink,
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
  @Input()
  editNav?: string;

  @Output()
  saveRow = new EventEmitter();
  @Output()
  deleteRow = new EventEmitter();
  @Output()
  editRow = new EventEmitter();

  onEdit(row: any){
    this.saveRow.emit(row);
    this.editRow.emit(row);
  }
  onDelete = (row: any) => {
    this.deleteRow.emit(row);
    this.data.splice(this.data.indexOf(row), 1);
  }
}
