import {Inject, Injectable} from '@angular/core';
import {USERS_SERVICE_TOKEN} from "../InjectionTokens";
import {IUsersService} from "../Users/i-users.service";
import {map, Observable, ReplaySubject} from "rxjs";
import {User} from "../../Models/User";

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {
  constructor(@Inject(USERS_SERVICE_TOKEN) private usersService: IUsersService) {
    this.Clients = usersService.GetUsers();
  }

  public Clients: Observable<User[]>;

  public FindClient(query: string): Observable<User[]> {
    return this.Clients.pipe(
      map( users => this.searchUsers(users, query) )
    )
  }
  public SortClient(param: any): Observable<User[]> {
    throw new Error("Method not implemented.");
  }

  // region Focused client
  private clientInFocus: ReplaySubject<User> = new ReplaySubject<User>();
  private clientInFocus$: Observable<User> = this.clientInFocus.asObservable();

  public GetClientInFocus(): Observable<User> {
    return this.clientInFocus$;
  }
  public SetClientInFocus(user: User): void {
    this.clientInFocus.next(user);
  }
  // endregion


  // region CRUD
  public CreateClient(user: User): void{
    throw new Error("Method not implemented.");
  }
  public UpdateClient(user: User): void{
    throw new Error("Method not implemented.");
  }
  public RemoveClient(user: User): void{
    throw new Error("Method not implemented.");
  }
  // endregion


  // region Utils
  private searchUsers(users: User[], query: string) : User[]{
    return users.filter(
      user => {
        const userString = Object.values(user).join(' ').toLowerCase();
        return userString.includes(query.toLowerCase());
      });
  }
  // endregion
}
