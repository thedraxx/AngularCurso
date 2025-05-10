import { Component, output, signal } from '@angular/core';
import { Character } from '../../../../interfaces/Icharacters.interface';

@Component({
  selector: 'dragonball-input-list',
  imports: [],
  templateUrl: './imput-list.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputistComponent {
  name = signal('');
  powerLevel = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (this.name().trim() === '') return;
    if (this.powerLevel() < 0) return;
    if (this.powerLevel() > 9000) {
      alert('Power level is too high!');
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      powerLevel: Number(this.powerLevel())
    };

    this.newCharacter.emit(newCharacter);
    this.name.set('');
    this.powerLevel.set(0);

  }

}
