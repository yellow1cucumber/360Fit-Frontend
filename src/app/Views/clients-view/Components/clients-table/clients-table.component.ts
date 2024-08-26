import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {TableHeaderComponent} from "../table-header/table-header.component";
import {User} from "../../../../Models/User";
import {DatePipe, NgClass, NgForOf} from "@angular/common";
import {CLIENTS_SERVICE_TOKEN} from "../../../../Services/InjectionTokens";
import {ClientsService} from "../../../../Services/Clients/clients.service";

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

  constructor(@Inject(CLIENTS_SERVICE_TOKEN) private clientsService: ClientsService) {
    this.clientsService.FindClients.subscribe(
      (clients: User[]) => {
        this.Clients = clients;
      });
  }

  public Clients: User[] = [];

  public UserSelected(client: User): void{
    this.OnDoubleClick.emit(client);
  }
}
