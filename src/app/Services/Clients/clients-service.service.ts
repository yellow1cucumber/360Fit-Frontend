import {Inject, Injectable} from '@angular/core';
import {USERS_SERVICE_TOKEN} from "../InjectionTokens";
import {IUsersService} from "../Users/i-users.service";
import {Observable} from "rxjs";
import {User} from "../../Models/User";

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {
  constructor(@Inject(USERS_SERVICE_TOKEN) private usersService: IUsersService) {
    this.Clients = usersService.GetUsers();
  }

  public Clients: Observable<User[]>;

  public FindClient(data: string): Observable<User[]> {
    throw new Error("Method not implemented.");
  }
  public SortClient(param: any): Observable<User[]> {
    throw new Error("Method not implemented.");
  }

  public CreateClient(user: User): void{
    throw new Error("Method not implemented.");
  }
  public UpdateClient(user: User): void{
    throw new Error("Method not implemented.");
  }
  public RemoveClient(user: User): void{
    throw new Error("Method not implemented.");
  }
}
