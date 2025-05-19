import { Component } from '@angular/core';
import { GifsSideMenuHeaderComponent } from "./gifs-side-menu-header/gifs-side-menu-header.component";
import { GifsSideMenuoptionsComponent } from "./gifs-side-menu-options/gifs-side-menu-options.component";

@Component({
  selector: 'app-gifs-side-menu',
  imports: [GifsSideMenuHeaderComponent, GifsSideMenuoptionsComponent],
  templateUrl: './gifs-side-menu.component.html',
})
export class GifsSideMenuComponent {

}
