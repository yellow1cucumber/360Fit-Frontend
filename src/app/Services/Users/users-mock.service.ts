import {Injectable} from '@angular/core';
import {BehaviorSubject, filter, map, Observable, of, ReplaySubject} from "rxjs";
import {User} from "../../Models/User";
import {IUsersService} from "./i-users.service";

@Injectable({
  providedIn: 'root'
})
export class UsersMockService implements IUsersService {
  private selectedUserSubject: ReplaySubject<User> = new ReplaySubject<User>();
  private selectedUser$: Observable<User> = this.selectedUserSubject.asObservable();

  constructor() {
  }

  public GetUserById(id: number): Observable<User> {
    return this.users.pipe(
      map(users => users.find(user => user.Id === id)),
      filter((user): user is User => !!user)
    );
  }

  public GetUsers(): Observable<User[]> {
    return this.users;
  }

  public CreateUser(): User {
    return {
      Id: 999,
      Name: "Пусто",
      Surname: "Пусто",
      Patronymic: "Пусто",
      CardNumber: "Пусто",
      Phone: "Пусто",
      Email: "Пусто",
      Deposit: 0,
      HasActiveSubscription: true,
      LastVisit: null,
      DateOfBirth: null
    }
  }

  public SetSelectedUser(user: User): void {
    this.selectedUserSubject.next(user);
  }

  public GetSelectedUser(): Observable<User> {
    return this.selectedUser$;
  }

  private users: Observable<User[]> = of([
  {
    Id: 0,
    Name: "Никита",
    Surname: "Садовский",
    Patronymic: "Алексеевич",
    CardNumber: "1234-5678-9012-3456",
    Phone: "+7 (771) 385-15-74",
    Email: "nikita.sadovsky@example.com",
    Deposit: 1500,
    HasActiveSubscription: true,
    LastVisit: new Date("2024-08-16"),
    DateOfBirth: new Date("1990-01-15")
  },
  {
    Id: 1,
    Name: "Сардар",
    Surname: "Абдразимов",
    Patronymic: "Маратович",
    CardNumber: "2345-6789-0123-4567",
    Phone: "+7 (771) 385-15-75",
    Email: "sardar.abdrazimov@example.com",
    Deposit: 0,
    HasActiveSubscription: false,
    LastVisit: new Date("2024-08-16"),
    DateOfBirth: new Date("1988-03-10")
  },
  {
    Id: 2,
    Name: "Нурзат",
    Surname: "Керимбай",
    Patronymic: "Жолдасбековна",
    CardNumber: "3456-7890-1234-5678",
    Phone: "+7 (771) 385-15-76",
    Email: "nurzat.kerimbay@example.com",
    Deposit: 3000,
    HasActiveSubscription: true,
    LastVisit: new Date("2024-08-16"),
    DateOfBirth: new Date("1992-07-24")
  },
  {
    Id: 3,
    Name: "Маргарита",
    Surname: "Кожевникова",
    Patronymic: "Андреевна",
    CardNumber: "4567-8901-2345-6789",
    Phone: "+7 (771) 385-15-77",
    Email: "margarita.kozhevnikova@example.com",
    Deposit: 500,
    HasActiveSubscription: true,
    LastVisit: new Date("2024-08-16"),
    DateOfBirth: new Date("1995-09-12")
  },
  {
    Id: 4,
    Name: "Бекбулат",
    Surname: "Матенов",
    Patronymic: "Бахтиярович",
    CardNumber: "5678-9012-3456-7890",
    Phone: "+7 (771) 385-15-78",
    Email: "bekbulat.matenov@example.com",
    Deposit: 2500,
    HasActiveSubscription: true,
    LastVisit: new Date("2024-08-16"),
    DateOfBirth: new Date("1990-11-30")
  },
  {
    Id: 5,
    Name: "Нигара",
    Surname: "Миноварова",
    Patronymic: "Исмаиловна",
    CardNumber: "6789-0123-4567-8901",
    Phone: "+7 (771) 385-15-79",
    Email: "nigara.minovarova@example.com",
    Deposit: 700,
    HasActiveSubscription: true,
    LastVisit: new Date("2024-08-16"),
    DateOfBirth: new Date("1987-06-05")
  },
  {
    Id: 6,
    Name: "Сергей",
    Surname: "Ни",
    Patronymic: "Владимирович",
    CardNumber: "7890-1234-5678-9012",
    Phone: "+7 (771) 385-15-80",
    Email: "sergey.ni@example.com",
    Deposit: 1000,
    HasActiveSubscription: true,
    LastVisit: new Date("2024-08-16"),
    DateOfBirth: new Date("1985-12-22")
  },
  {
    Id: 7,
    Name: "Олжас",
    Surname: "Онгарбек",
    Patronymic: "Ерланович",
    CardNumber: "8901-2345-6789-0123",
    Phone: "+7 (771) 385-15-81",
    Email: "olzhas.ongarbek@example.com",
    Deposit: 0,
    HasActiveSubscription: false,
    LastVisit: new Date("2024-08-16"),
    DateOfBirth: new Date("1993-04-11")
  },
  {
    Id: 8,
    Name: "Андрей",
    Surname: "Пинаев",
    Patronymic: "Григорьевич",
    CardNumber: "9012-3456-7890-1234",
    Phone: "+7 (771) 385-15-82",
    Email: "andrey.pinaev@example.com",
    Deposit: 0,
    HasActiveSubscription: false,
    LastVisit: new Date("2024-08-16"),
    DateOfBirth: new Date("1989-02-19")
  },
  {
    Id: 9,
    Name: "Асиф",
    Surname: "Рустамов",
    Patronymic: "Шамильевич",
    CardNumber: "0123-4567-8901-2345",
    Phone: "+7 (771) 385-15-83",
    Email: "asif.rustamov@example.com",
    Deposit: 500,
    HasActiveSubscription: true,
    LastVisit: new Date("2024-08-16"),
    DateOfBirth: new Date("1984-08-27")
  },
  {
    Id: 10,
    Name: "Аслан",
    Surname: "Салманов",
    Patronymic: "Рамазанович",
    CardNumber: "1234-5678-9012-3456",
    Phone: "+7 (771) 385-15-84",
    Email: "aslan.salmanov@example.com",
    Deposit: 2000,
    HasActiveSubscription: true,
    LastVisit: new Date("2024-08-16"),
    DateOfBirth: new Date("1991-10-03")
  },
  {
    Id: 11,
    Name: "Назгул",
    Surname: "Талгаткызы",
    Patronymic: "Нурлановна",
    CardNumber: "2345-6789-0123-4567",
    Phone: "+7 (771) 385-15-85",
    Email: "nazgul.talgatkyzy@example.com",
    Deposit: 300,
    HasActiveSubscription: true,
    LastVisit: new Date("2024-08-16"),
    DateOfBirth: new Date("1996-05-14")
  },
  {
    Id: 12,
    Name: "Анна",
    Surname: "Фролова",
    Patronymic: "Сергеевна",
    CardNumber: "3456-7890-1234-5678",
    Phone: "+7 (771) 385-15-86",
    Email: "anna.frolova@example.com",
    Deposit: 1000,
    HasActiveSubscription: true,
    LastVisit: new Date("2024-08-16"),
    DateOfBirth: new Date("1992-11-02")
  }
]);
}
