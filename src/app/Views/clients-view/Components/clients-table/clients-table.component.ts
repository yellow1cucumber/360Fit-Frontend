import { Component } from '@angular/core';
import {TableHeaderComponent} from "../table-header/table-header.component";
import {UsersMockService} from "../../../../../ServicesMock/users-mock.service";
import {User} from "../../../../Models/User";
import {DatePipe, NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-clients-table',
  standalone: true,
  imports: [
    TableHeaderComponent,
    NgForOf,
    DatePipe,
    NgClass
  ],
  templateUrl: './clients-table.component.html',
  styleUrl: './clients-table.component.scss'
})
export class ClientsTableComponent {
  constructor(private usersService: UsersMockService) {
    this.usersService.Users.subscribe(
      (users: User[]) => {
        this.Users = users;
      });
  }
  public Users: User[] = [];
}
