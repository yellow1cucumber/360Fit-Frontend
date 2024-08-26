import { Injectable } from '@angular/core';
import {filter, map, Observable, of} from "rxjs";
import {User} from "../../Models/User";
import {IUsersServiceService} from "./iusers-service.service";

@Injectable({
  providedIn: 'root'
})
export class UsersMockService implements IUsersServiceService {
  constructor() { }

    public GetUserById(id: number): Observable<User> {
      return this.users.pipe(
        map(users => users.find(user => user.Id === id)),
        filter((user): user is User => !!user)
      );
    }
    public GetUsers(): Observable<User[]> {
        return this.users;
    }

  private users: Observable<User[]> = of([
    {Id: 0, Name: "Никита", Surname: "Садовский", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Id: 1, Name: "Сардар", Surname: "Абдразимов", Phone: "+7 (771) 385-15-74", HasActiveSubscription: false, LastVisit: new Date("2024-08-16")},
    {Id: 2, Name: "Нурзат", Surname: "Керимбай", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Id: 3, Name: "Маргарита", Surname: "Кожевникова", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Id: 4, Name: "Бекбулат", Surname: "Матенов", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Id: 5, Name: "Нигара", Surname: "Миноварова", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Id: 6, Name: "Сергей", Surname: "Ни", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Id: 7, Name: "Олжас", Surname: "Онгарбек", Phone: "+7 (771) 385-15-74", HasActiveSubscription: false, LastVisit: new Date("2024-08-16")},
    {Id: 8, Name: "Андрей", Surname: "Пинаев", Phone: "+7 (771) 385-15-74", HasActiveSubscription: false, LastVisit: new Date("2024-08-16")},
    {Id: 9, Name: "Асиф", Surname: "Рустамоф", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Id: 10, Name: "Аслан", Surname: "Салманов", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Id: 11, Name: "Назгул", Surname: "Талгаткызы", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Id: 12, Name: "Анна", Surname: "Фролова", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
  ]);
}
