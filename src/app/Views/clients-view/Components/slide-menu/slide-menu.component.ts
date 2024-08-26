import {Component, Inject} from '@angular/core';
import {NgClass} from "@angular/common";
import {USERS_SERVICE_TOKEN} from "../../../../Services/InjectionTokens";
import {IUsersService} from "../../../../Services/Users/i-users.service";
import {User} from "../../../../Models/User";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-slide-menu',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './slide-menu.component.html',
  styleUrl: './slide-menu.component.scss'
})
export class SlideMenuComponent {
  constructor(@Inject(USERS_SERVICE_TOKEN) private usersService: IUsersService) {
    this.usersService.GetSelectedUser().subscribe(
      (value) => {
        this.ActiveUser = value;
        console.log(this.ActiveUser);
      },
    )
  }
  public ActiveUser: User | null = null;

  public UserFormGroup: FormGroup = new FormGroup({
    'Name': new FormControl('', Validators.required),
    'Surname': new FormControl('', Validators.required),
    'Patronymic': new FormControl('', Validators.required),

    'CardNumber': new FormControl('', Validators.required),
    'PhoneNumber': new FormControl('', Validators.pattern("[0-9]{10}")),
    'Email': new FormControl('', Validators.email),
    'DateOfBirth': new FormControl('', Validators.required),
  });
}
