
import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: "./hero-page.component.html",
  imports: [UpperCasePipe]
})


export class HeroPageComponent {

  name = signal<string>("IronMan");
  age = signal<number>(45);

  heroDescription = computed<string>(() => {
    return `${this.name()} is ${this.age()} years old`;
  }
  );


  capitalizedName = computed<string>(() => {
    return this.name().toUpperCase();
  }
  );

  changeHero() {
    this.name.set("SpiderMan");
    this.age.set(25);
  }


  changeAge() {
    this.age.set(30);
  }

  resetForm() {
    this.name.set("IronMan");
    this.age.set(45);
  }
}
