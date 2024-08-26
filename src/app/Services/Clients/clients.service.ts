import {Inject, Injectable} from '@angular/core';
import {USERS_SERVICE_TOKEN} from "../InjectionTokens";
import {IUsersService} from "../Users/i-users.service";
import {BehaviorSubject, combineLatest, map, Observable, ReplaySubject} from "rxjs";
import {User} from "../../Models/User";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  constructor(@Inject(USERS_SERVICE_TOKEN) private usersService: IUsersService) {
    this.Clients = combineLatest([
      this.usersService.GetUsers(),
      this.searchQuery.asObservable()
    ]).pipe(
      map(([users, query]) => this.searchUsers(users, query))
    );
  }

  public Clients: Observable<User[]>;

  // region Find client
  private searchQuery: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public FindClient(query: string): void {
    this.searchQuery.next(query);
  }
  // endregion

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
