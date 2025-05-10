import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../../../interfaces/Icharacters.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {


  characters = input.required<Character[]>();
  listname = input.required<string>();

}
