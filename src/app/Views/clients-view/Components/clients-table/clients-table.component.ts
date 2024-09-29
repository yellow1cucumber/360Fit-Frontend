import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TableHeaderComponent} from "../table-header/table-header.component";
import {AsyncPipe, DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {GetClientsQuery, UserInput} from "../../../../graphql/types";
import {map, Observable} from "rxjs";
import {ClientsService} from "../../../../Services/Clients/clients.service";

@Component({
  selector: 'app-clients-table',
  standalone: true,
  imports: [
    TableHeaderComponent,
    NgForOf,
    DatePipe,
    NgClass,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './clients-table.component.html',
  styleUrl: './clients-table.component.scss'
})
export class ClientsTableComponent implements OnInit{
  constructor(private readonly clientsService: ClientsService) { }

  public clients: UserInput[] = [];

  @Output() public OnDoubleClick: EventEmitter<UserInput> = new EventEmitter();
  public UserSelected(client: UserInput): void{
    this.OnDoubleClick.emit(client);
  }

  ngOnInit(): void {
    this.clientsService.GetClients(1).subscribe(clients => {
      this.clients = clients;
    })
  }
}
