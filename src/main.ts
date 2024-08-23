import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(add(1, 2));

// let notSure: any = 4;
// notSure = 'maybe a string instead';
// notSure = false;
// notSure = {};

// let num: number;
// let mixedType: string | number | boolean;

// num = notSure;

// console.log(num);

// function logMessage(message: string): void {
//   console.log(message);
// }

// logMessage('Hello, world!');

// type User = {
//   id: number;
//   name: string;
// };

// let Dima: User;

// Dima = { id: 1, name: 'Alice' };

// let someValue: unknown = 'this is a string';

// let strLength1: number = (<string>someValue).length;

// console.log('this is a string: ', strLength1);

// class DataStorage<T> {
//   private data: T[] = [];

//   addItem(item: T) {
//     this.data.push(item);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

// const textStorage = new DataStorage<string>();

// textStorage.addItem('Hello');
// textStorage.addItem('World');
// console.log('Values of Text Storage: ', textStorage.getItems()); // ['Hello', 'World']
// textStorage.addItem(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

// const numberStorage = new DataStorage<number>(1);
// numberStorage.addItem(1);
// numberStorage.addItem(2);
// console.log('Values of Numbers Storage: ', numberStorage.getItems()); // [1, 2]
// numberStorage.addItem('TEXT'); // Error: Argument of type 'number' is not assignable to parameter of type 'number'

// const x: unknown = '5';
// console.log('Value:', x, 'Length:', (<string>x).length);

// type UserP = {
//   name: string;
//   age: number;
//   desc: string;
// };

// let User: UserP;

let count = 0;
const intervalId = setInterval(() => {
  console.log(count++);
}, 1000);
setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
