import {Component, Inject} from '@angular/core';
import {ClientsTableComponent} from "./Components/clients-table/clients-table.component";
import {HeaderComponent} from "../../Components/header/header.component";
import {UserSearchComponent} from "./Components/user-search/user-search.component";
import {SlideMenuComponent} from "./Components/slide-menu/slide-menu.component";
import {NgClass} from "@angular/common";
import {User} from "../../Models/User";
import {CLIENTS_SERVICE_TOKEN} from "../../Services/InjectionTokens";
import {ClientsService} from "../../Services/Clients/clients.service";


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
  constructor(@Inject(CLIENTS_SERVICE_TOKEN) private clientsService: ClientsService) {
  }

  public IsSlideMenuActive: boolean = false;
  public ChangeSlideMenuVisibility(): void{
    this.IsSlideMenuActive = !this.IsSlideMenuActive;
  }

  public ClientSelected(client: User) : void {
    this.clientsService.SetClientInFocus(client);
    this.IsSlideMenuActive = true;
  }
}
