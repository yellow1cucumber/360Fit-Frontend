import {Component, Inject} from '@angular/core';
import {CLIENTS_SERVICE_TOKEN} from "../../../../Services/InjectionTokens";
import {ClientsService} from "../../../../Services/Clients/clients.service";
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
  constructor(@Inject(CLIENTS_SERVICE_TOKEN) private clientsService: ClientsService) {
  }

  public Query: string;
  public FindUsers(): void {
    this.clientsService.FindClient(this.Query);
  }
}
