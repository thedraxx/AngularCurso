

export class Person {

    public name: string;
    public age: number;
    private address: string;


    constructor(name: string, address: string, age?: number) {
        this.name = name;
        this.address = address;
        this.age = 0;
    }


    public getName(): string {
        return this.name + ' ' + this.address;
    }

}


// export class Hero extends Person {

//     public superPower: string;


//     constructor(name: string, address: string, superPower: string) {
//         super(name, address);
//         this.superPower = superPower;
//     }


//     public getSuperPower(): string {
//         return this.superPower;
//     }

// }



export class Hero {


    public name: string;
    public address: string;
    public superPower: string;
    public person: Person;


    constructor(name: string, address: string, superPower: string, person: Person) {

        this.name = name;
        this.address = address;
        this.superPower = superPower;
        this.person = person;


    }
}


const tony = new Person('Tony Stark', '123 Main St', 22);

const ironman = new Hero('Ironman', '456 Stark Tower', 'Flying', tony);

console.log(tony.getName()); // Output: Tony Stark 123 Main St
console.log(ironman.name); // Output: Ironman