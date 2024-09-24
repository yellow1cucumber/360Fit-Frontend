import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss'
})
export class UserSearchComponent {
  constructor() {}

  public Query: string;
}
