import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavLinkComponent} from "./Components/header/Components/nav-link/nav-link.component";
import {LogoComponent} from "./Components/logo/logo.component";
import {HeaderComponent} from "./Components/header/header.component";
import {LoginViewComponent} from "./Views/login-view/login-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavLinkComponent, LogoComponent, HeaderComponent, LoginViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = '360Fit';
}
