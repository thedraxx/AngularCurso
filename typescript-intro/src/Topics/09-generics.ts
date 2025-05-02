export function whatsMyType<T>(arg: T): T {

    return arg;
}

let a = whatsMyType<number>(1); // a is of type number

let b = whatsMyType<string>("hello"); // b is of type string

let c = whatsMyType(true); // c is of type boolean

let d = whatsMyType([1, 2, 3]); // d is of type number[]

let e = whatsMyType({ name: "John" }); // e is of type { name: string }

console.log(a, b, c, d, e);