import {Component, Input} from '@angular/core';

@Component({
  selector: 'table-component',
  imports: [],
  templateUrl: './table.component.html',
  standalone: true,
  styleUrl: './table.component.scss'
})

export class TableComponent {
  @Input()
  headers: string[] = [];
  @Input()
  data: any[] = [];
}