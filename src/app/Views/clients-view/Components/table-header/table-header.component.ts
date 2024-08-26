import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-table-header',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './table-header.component.html',
  styleUrl: './table-header.component.scss'
})
export class TableHeaderComponent {
  @Input() public title: string;

  public isSorting: boolean = false;
  public SortUp: boolean = false;

  public OnClick(): void {
    if(this.isSorting){
      this.SortUp = !this.SortUp;
      return;
    }
    this.isSorting = !this.isSorting;
  }
}
