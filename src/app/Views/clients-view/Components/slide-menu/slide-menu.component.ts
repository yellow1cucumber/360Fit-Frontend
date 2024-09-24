import {Component} from '@angular/core';
import {NgClass} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserInput} from "../../../../graphql/types";

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
  constructor() {}
  public ActiveClient: UserInput | null = null;

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
