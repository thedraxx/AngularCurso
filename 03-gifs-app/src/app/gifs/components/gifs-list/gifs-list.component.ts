import { Component, Input } from '@angular/core';
import { GifsListItemComponent } from "../gifs-list-item/gifs-list-item.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'gifs-list',
  imports: [GifsListItemComponent, NgFor],
  templateUrl: './gifs-list.component.html',
  styleUrl: './gifs-list.component.css'
})
export class GifsListComponent {
  @Input() imageUrls: string[] = [];
}
