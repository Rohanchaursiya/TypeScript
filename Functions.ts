// Return Type
// The type of the value returned by the function can be explicitly defined.

// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
}
console.log(getTime());

// If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.

// Void Return Type
// The type void can be used to indicate a function doesn't return any value.
// Example

function printHello(): void {
    console.log('Hello!');
}
printHello();


// Parameters
// Function parameters are typed with a similar syntax as variable declarations.

function multiply(a: number, b: number) {
    return a * b;
}
console.log(multiply(5, 10)); // 50

// If no parameter type is defined, TypeScript will default to using any, 
// unless additional type information is available as shown in the Default Parameters and Type Alias sections below.

// Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
// the `?` operator here marks parameter `c` as optional

function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}
console.log(add(5, 10)); // 15
console.log(add(5, 10, 15)); // 30

// Default Parameters
// For parameters with default values, the default value goes after the type annotation:

function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}
console.log(pow(2)); // 1024
console.log(pow(2, 3)); // 8

// Named parameters
// Typing named parameters follows the same pattern as typing normal parameters.

function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 })); // 5

// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.

function _add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(_add(1, 2)); // 3
console.log(_add(1, 2, 3, 4)); // 10

// Type Alias
// Function types can be specified separately from functions with type aliases.

type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;
console.log(negateFunction(5)); // -5