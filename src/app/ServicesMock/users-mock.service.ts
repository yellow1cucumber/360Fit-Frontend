import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../Models/User";

@Injectable({
  providedIn: 'root'
})
export class UsersMockService {
  constructor() { }

  public Users: Observable<User[]> = of([
    {Name: "Никита", Surname: "Садовский", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Name: "Сардар", Surname: "Абдразимов", Phone: "+7 (771) 385-15-74", HasActiveSubscription: false, LastVisit: new Date("2024-08-16")},
    {Name: "Нурзат", Surname: "Керимбай", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Name: "Маргарита", Surname: "Кожевникова", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Name: "Бекбулат", Surname: "Матенов", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Name: "Нигара", Surname: "Миноварова", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Name: "Сергей", Surname: "Ни", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Name: "Олжас", Surname: "Онгарбек", Phone: "+7 (771) 385-15-74", HasActiveSubscription: false, LastVisit: new Date("2024-08-16")},
    {Name: "Андрей", Surname: "Пинаев", Phone: "+7 (771) 385-15-74", HasActiveSubscription: false, LastVisit: new Date("2024-08-16")},
    {Name: "Асиф", Surname: "Рустамоф", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Name: "Аслан", Surname: "Салманов", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Name: "Назгул", Surname: "Талгаткызы", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
    {Name: "Анна", Surname: "Фролова", Phone: "+7 (771) 385-15-74", HasActiveSubscription: true, LastVisit: new Date("2024-08-16")},
  ]);

}
