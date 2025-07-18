console.log("There are 3 main primitives in JavaScript and TypeScript");
console.log("They are: Number, String, Boolean");

console.log("There are also 2 less common primitives used in JavaScript and TypeScript");
console.log("They are: Symbol, BigInt");

// Type Assignment

// When creating a variable, There are 2 main way to assign a type in TypeScript
// 1. Explicit :-> Explicit type assignment are easier to read and more intentional.
// 2. Implicit :-> TypeScript will "guess" the type, based on the assigned value.

// Explicit Example
let _name: string = "John";

let age: number = 30;
console.log(_name+" "+age);
console.log(typeof _name);

// Implicit Example
let _name2 = "John";
let age2 = 30;
console.log(_name2+" "+age2);
console.log(typeof _name);

// Unable to Infer
// TypeScript may not always properly infer what the type of a variable may be.
// In such cases, it will set the type to any which disables type checking.