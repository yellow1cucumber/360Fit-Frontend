import {Component, Inject} from '@angular/core';
import {NgClass} from "@angular/common";
import {USERS_SERVICE_TOKEN} from "../../../../Services/InjectionTokens";
import {IUsersService} from "../../../../Services/Users/i-users.service";
import {User} from "../../../../Models/User";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-slide-menu',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './slide-menu.component.html',
  styleUrl: './slide-menu.component.scss'
})
export class SlideMenuComponent {
  constructor(@Inject(USERS_SERVICE_TOKEN) private usersService: IUsersService) {
    this.usersService.GetSelectedUser().subscribe(
      value => this.ActiveUser = value,
    )
  }
  public ActiveUser: User | null = null;
}
