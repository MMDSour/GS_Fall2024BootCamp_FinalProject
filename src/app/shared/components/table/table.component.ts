import {Component, EventEmitter, Input, Output} from '@angular/core';
import {YesNoPipe} from '../../pipes/yes-no.pipe';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'table-component',
  imports: [
    YesNoPipe,
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
