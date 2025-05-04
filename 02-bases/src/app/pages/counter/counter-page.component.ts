import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: "./counter-page.component.html",
  styles:
    [
      `
      h1 {
        color: #fff;
        text-align: center;
      }
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      button {
        margin: 5px;
      }
    `,
    ],
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  increaseByOne() {
    this.counter = this.counter + 1;
    this.counterSignal.update((current) => current + 1);
  }
  decreaseByOne() {
    this.counter = this.counter - 1;
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
