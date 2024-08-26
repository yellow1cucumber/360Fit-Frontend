import {Observable} from "rxjs";
import {User} from "../../Models/User";

export interface IUsersServiceService {
  GetUserById(id: number) : Observable<User>;
  GetUsers() : Observable<User[]>;
}
