import { Component } from "@angular/core";

@Component({
  template: `
    <h1>Counter</h1>
    <h2>{{ counter }}</h2>
    <button (click)="increaseByOne()">Increment</button>
    <button (click)="decreaseByOne()">Decrement</button>
  `,

})
export class CounterPageComponent {
  counter = 10;


  increaseByOne() {
    this.counter = this.counter + 1;
  }
  decreaseByOne() {
    this.counter = this.counter - 1;
  }
}
