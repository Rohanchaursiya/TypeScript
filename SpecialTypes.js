console.log("TypeScript has special types that may not refer to any specific type of data.");
// ---------------Type: any--------------------
// any is a type that disables type checking and effectively allows all types to be used.
// The example below does not use any and will throw an error:
// Example without any
var u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
console.log("Setting any to the special type any disables type checking");
// Example with any
var v = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
