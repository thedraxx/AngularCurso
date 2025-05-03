interface Passanger {
    name: string;
    children?: string[];
    age?: number;
    address?: {
        street: string;
        city: string;
    };



}


const passanger: Passanger = {
    name: 'John Doe',
    children: ['Jane', 'Doe'],
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};


const passanger2: Passanger = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York'
    }
};


const printChildren = (passanger: Passanger) => {
    // Optional chaining
    const howManyChildren = passanger.children?.length ?? 0;
    console.log(howManyChildren);
}

printChildren(passanger);
printChildren(passanger2); 