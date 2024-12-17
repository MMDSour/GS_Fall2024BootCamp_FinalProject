import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

export class TableComponent implements OnInit {
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

  tableHeaders: string[] = []

  ngOnInit() {
    if(localStorage.getItem('role') === '0')
      this.headers.splice(this.headers.indexOf('actions'), 1);
  }

  onEdit(row: any){
    this.saveRow.emit(row);
    this.editRow.emit(row);
  }
  onDelete = (row: any) => {
    this.deleteRow.emit(row);
    this.data.splice(this.data.indexOf(row), 1);
  }
}
