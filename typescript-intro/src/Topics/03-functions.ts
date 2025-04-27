

function addNumbers(number1: number, number2: number): string {

    let num1: number = number1;
    let num2: number = number2;
    let sum: number = number1 + number2;
    return `The sum of ${num1} and ${num2} is ${sum}`;
}


const addNumberArrow = (number1: number, number2: number): string => {
    let num1: number = number1;
    let num2: number = number2;
    let sum: number = number1 + number2;
    return `The sum of ${num1} and ${num2} is ${sum}`;
}


const multiply = (number1: number, number2?: number, number3: number = 22): number => {
    return number1 * number3;
}


interface Character {
    name: string;
    pv: number;
    attack: number;
    defense: number;
}


const heal = (character: Character, amount: number): string => {

    character.pv = character.pv + amount;

    return `${character} has healed ${amount} points`;
}

// console.table(addNumbers(5, 10)); // The sum of 5 and 10 is 15
// console.table(addNumberArrow(5, 10)); // The sum of 5 and 10 is 15
// console.table(multiply(5)); // The sum of 5 and 10 is 15

const character: Character = {
    name: "John",
    pv: 100,
    attack: 50,
    defense: 30
}

console.log(heal(character, 20)); // John has healed 20 pointsz


export { }