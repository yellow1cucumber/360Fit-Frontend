import {Component, Inject} from '@angular/core';
import {NgClass} from "@angular/common";
import {CLIENTS_SERVICE_TOKEN} from "../../../../Services/InjectionTokens";
import {User} from "../../../../Models/User";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ClientsService} from "../../../../Services/Clients/clients.service";

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
  constructor(@Inject(CLIENTS_SERVICE_TOKEN) private clientsService: ClientsService) {
    this.clientsService.GetClientInFocus().subscribe(
      value => this.ActiveClient = value
    )
  }
  public ActiveClient: User | null = null;

  public UserFormGroup: FormGroup = new FormGroup({
    'Name': new FormControl('', Validators.required),
    'Surname': new FormControl('', Validators.required),
    'Patronymic': new FormControl('', Validators.required),

    'CardNumber': new FormControl('', Validators.required),
    'PhoneNumber': new FormControl('', Validators.pattern("[0-9]{10}")),
    'Email': new FormControl('', Validators.email),
    'DateOfBirth': new FormControl('', Validators.required),
  });

  public ToIsoDate(date: Date | null): string {
    if (!date) {
      return '';
    }
    return date.toISOString().split('T')[0];
  }
}
