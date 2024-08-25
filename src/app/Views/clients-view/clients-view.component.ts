import { Component } from '@angular/core';
import {ClientsTableComponent} from "./Components/clients-table/clients-table.component";
import {HeaderComponent} from "../../Components/header/header.component";
import {UserSearchComponent} from "./Components/user-search/user-search.component";
import {SlideMenuComponent} from "./Components/slide-menu/slide-menu.component";

@Component({
  selector: 'app-clients-view',
  standalone: true,
  imports: [
    ClientsTableComponent,
    HeaderComponent,
    UserSearchComponent,
    SlideMenuComponent
  ],
  templateUrl: './clients-view.component.html',
  styleUrl: './clients-view.component.scss'
})
export class ClientsViewComponent {

}
