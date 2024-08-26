import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavLinkComponent} from "./Components/header/Components/nav-link/nav-link.component";
import {LogoComponent} from "./Components/logo/logo.component";
import {HeaderComponent} from "./Components/header/header.component";
import {LoginViewComponent} from "./Views/login-view/login-view.component";
import {USERS_SERVICE_TOKEN} from "./Services/InjectionTokens";
import {UsersMockService} from "./Services/Users/users-mock.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavLinkComponent, LogoComponent, HeaderComponent, LoginViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[
    {provide: USERS_SERVICE_TOKEN, useClass: UsersMockService}
  ]
})
export class AppComponent {
  title = '360Fit';
}
