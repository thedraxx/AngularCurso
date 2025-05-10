import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  powerLevel: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);
  powerLevel = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', powerLevel: 9000 },
    // { id: 2, name: 'Vegeta', powerLevel: 8500 },
    // { id: 3, name: 'Gohan', powerLevel: 7000 },
    // { id: 4, name: 'Piccolo', powerLevel: 6000 },
    // { id: 5, name: 'Frieza', powerLevel: 10000 },
    // { id: 6, name: 'Cell', powerLevel: 9500 },
    // { id: 7, name: 'Majin Buu', powerLevel: 8000 },
  ]);


  addCharacter() {

    if (this.name().trim() === '') return;
    if (this.powerLevel() < 0) return;
    if (this.powerLevel() > 9000) {
      alert('Power level is too high!');
      return;
    }
    if (this.characters().some((character) => character.name === this.name())) {
      alert('Character already exists!');
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      powerLevel: Number(this.powerLevel())
    };
    this.characters.update((prev) => [...prev, newCharacter]);
    this.name.set('');
    this.powerLevel.set(9000);
  }
}
