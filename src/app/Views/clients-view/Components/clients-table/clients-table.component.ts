import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TableHeaderComponent} from "../table-header/table-header.component";
import {AsyncPipe, DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {GetUsersGQL, GetUsersQuery, UserInput} from "../../../../graphql/types";
import {map, Observable} from "rxjs";

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
  constructor(private readonly getUsersGQL: GetUsersGQL) {}

  @Output() public OnDoubleClick: EventEmitter<UserInput> = new EventEmitter();
  public users$: Observable<GetUsersQuery['readUsers']>;

  public UserSelected(client: UserInput): void{
    this.OnDoubleClick.emit(client);
  }

  ngOnInit(): void {
    this.users$ = this.getUsersGQL.watch().valueChanges.pipe(
      map(result => result.data.readUsers)
    );
  }
}
