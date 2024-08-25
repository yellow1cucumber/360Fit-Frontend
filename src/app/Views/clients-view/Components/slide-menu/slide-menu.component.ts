import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-slide-menu',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './slide-menu.component.html',
  styleUrl: './slide-menu.component.scss'
})
export class SlideMenuComponent {
}
