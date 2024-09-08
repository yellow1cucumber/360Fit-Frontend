import {Observable} from "rxjs";
import {User} from "../../Models/User";

export interface IUsersService {
  GetUserById(id: number) : Observable<User>;
  GetUsers() : Observable<User[]>;

  CreateUser(): User;

  SetSelectedUser(user: User) : void;
  GetSelectedUser() : Observable<User>;
}
