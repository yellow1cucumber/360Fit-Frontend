import {Component, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserDtoInput, UserInput} from "../../../../graphql/types";
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
export class SlideMenuComponent implements OnInit{
  constructor(private readonly clientsService: ClientsService) {}
  public ActiveClient: UserInput | UserDtoInput | null = null;

  ngOnInit(): void {
    this.clientsService.SelectedClient$.subscribe(
      value => {this.ActiveClient = value},
    )
  }

  public UserFormGroup: FormGroup = new FormGroup({
    'Name': new FormControl('', Validators.required),
    'Surname': new FormControl('', Validators.required),
    'Patronymic': new FormControl('', Validators.required),

    'CardNumber': new FormControl(''),
    'PhoneNumber': new FormControl('', Validators.pattern("[0-9]{10}")),
    'Email': new FormControl('', Validators.email),
    'DateOfBirth': new FormControl(''),
  });

  public ToIsoDate(date: Date | null): string {
    if (!date) {
      return '';
    }
    return date.toISOString().split('T')[0];
  }

  public SaveClient(){
    this.clientsService.CreateClient(this.ActiveClient as UserDtoInput).subscribe();
  }
}
