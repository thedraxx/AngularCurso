import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { InputistComponent } from "../../components/dragonball/imput-list/imput-list.component";
import { DragonBallService } from '../../services/dragonball.service';


@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterListComponent, InputistComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {
  public DragonBallService = inject(DragonBallService);
}
