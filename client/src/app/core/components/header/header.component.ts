import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'header-component',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
