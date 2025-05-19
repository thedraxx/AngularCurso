import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuHeaderComponent } from "../../components/gifs-side-menu/gifs-side-menu-header/gifs-side-menu-header.component";
import { GifsSideMenuoptionsComponent } from "../../components/gifs-side-menu/gifs-side-menu-options/gifs-side-menu-options.component";
import { GifsSideMenuComponent } from "../../components/gifs-side-menu/gifs-side-menu.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenuHeaderComponent, GifsSideMenuoptionsComponent, GifsSideMenuComponent],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent { }
