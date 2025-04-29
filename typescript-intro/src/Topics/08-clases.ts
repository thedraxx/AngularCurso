

export class Person {

    public name: string;
    private address: string;


    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }


    public getName(): string {
        return this.name + ' ' + this.address;
    }

}


const person = new Person('John', '123 Main St');
console.log(person.getName()); // John