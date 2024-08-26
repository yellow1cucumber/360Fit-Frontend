import {Component, Inject} from '@angular/core';
import {ClientsTableComponent} from "./Components/clients-table/clients-table.component";
import {HeaderComponent} from "../../Components/header/header.component";
import {UserSearchComponent} from "./Components/user-search/user-search.component";
import {SlideMenuComponent} from "./Components/slide-menu/slide-menu.component";
import {NgClass} from "@angular/common";
import {User} from "../../Models/User";
import {USERS_SERVICE_TOKEN} from "../../Services/InjectionTokens";
import {IUsersService} from "../../Services/Users/i-users.service";

@Component({
  selector: 'app-clients-view',
  standalone: true,
  imports: [
    ClientsTableComponent,
    HeaderComponent,
    UserSearchComponent,
    SlideMenuComponent,
    NgClass
  ],
  templateUrl: './clients-view.component.html',
  styleUrl: './clients-view.component.scss'
})
export class ClientsViewComponent {
  constructor(@Inject(USERS_SERVICE_TOKEN) private usersService: IUsersService) {
  }

  public IsSlideMenuActive: boolean = false;
  public ChangeSlideMenuVisibility(): void{
    this.IsSlideMenuActive = !this.IsSlideMenuActive;
  }

  public UserSelected(user: User) : void {
    this.usersService.SetSelectedUser(user);
    this.IsSlideMenuActive = true;
  }
}
