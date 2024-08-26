import {Component, EventEmitter, Inject, Injectable, Output} from '@angular/core';
import {TableHeaderComponent} from "../table-header/table-header.component";
import {User} from "../../../../Models/User";
import {DatePipe, NgClass, NgForOf} from "@angular/common";
import {IUsersService} from "../../../../Services/Users/i-users.service";
import {USERS_SERVICE_TOKEN} from "../../../../Services/InjectionTokens";

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
  @Output() public OnDoubleClick: EventEmitter<User> = new EventEmitter();

  constructor(@Inject(USERS_SERVICE_TOKEN) private usersService: IUsersService) {
    this.usersService.GetUsers().subscribe(
      (users: User[]) => {
        this.Users = users;
      });
  }

  public Users: User[] = [];

  public UserSelected(user: User): void{
    this.OnDoubleClick.emit(user);
  }
}
