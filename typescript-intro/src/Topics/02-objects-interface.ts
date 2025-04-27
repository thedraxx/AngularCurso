
interface Person {
    name: string;
    age: number;
    email: string;
    isEmployed: boolean;
    skills: string[];
}


let skills: Person =
{
    name: "John Doe",
    age: 30,
    email: "@example.com",
    isEmployed: true,
    skills: ["JavaScript", "TypeScript", "React"]
}


console.table(skills);




export { }; // This line is necessary to make this file a module and avoid "Cannot find name 'name'" error