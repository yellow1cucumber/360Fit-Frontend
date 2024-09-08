export interface User {
  Id: number;
  Name: string;
  Surname: string;
  Patronymic: string;
  CardNumber: string;
  Phone: string;
  Email: string;
  Deposit: number;
  HasActiveSubscription: boolean
  LastVisit: Date | null;
  DateOfBirth: Date | null;
}
