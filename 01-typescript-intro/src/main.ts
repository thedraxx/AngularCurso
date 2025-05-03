import './style.css'
import "./Topics/01-basics-types.ts";
import "./Topics/02-objects-interface.ts";
import "./Topics/03-functions.ts";
import "./Topics/04-homework-types.ts";
import "./Topics/05-basic-destructiring.ts"


const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `Hola mundo!`;

console.log('Hola mundo!');
