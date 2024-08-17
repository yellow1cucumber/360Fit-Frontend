import { Component } from '@angular/core';
import {routes} from "../../app.routes";
import {LogoComponent} from "../logo/logo.component";
import {NavLinkComponent} from "../nav-link/nav-link.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoComponent,
    NavLinkComponent,
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public routes = routes;
}
