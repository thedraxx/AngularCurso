import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../../interfaces/Icharacters.interface';

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem("characters");
  return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root' })
export class DragonBallService {

  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newcharacter: Character) {
    this.characters.update((prev) => [...prev, newcharacter]);
  }

}
