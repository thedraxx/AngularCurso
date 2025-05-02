function classDecorator(constructor: new (...args: any[]) => any): any {

    return class extends constructor {
        newProperty: string = 'new property';
        hello: string = 'override';
        constructor(...args: any[]) {
            super(...args);
            console.log('Hello from decorator');
        }
    }

}


@classDecorator
export class SuperClass {
    public method(): void {
        console.log('SuperClass method');
    }
}



console.log('Decorador de clase' + SuperClass);


const myClass = new SuperClass();
myClass.method();