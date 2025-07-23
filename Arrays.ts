// TypeScript has a specific syntax for typing arrays.

let numbers : number[]=[1,2,3,4,5];
console.log(numbers);
numbers.push(6);
console.log(numbers);
console.log(typeof numbers);

//ReadOnly arrays are arrays that cannot be modified after creation.
let readOnlyNumbers: readonly number[] = [1, 2, 3];
console.log(typeof readOnlyNumbers);

// try{
//     readOnlyNumbers.push("Rohan");; // Error: Property 'push' does not exist on type 'readonly number[]'.
// }catch(error){
//     console.error("Error: Cannot modify a ReadonlyArray");
// }

//Type Inference allows TypeScript to automatically determine the type of an array based on its initial values.

let names = ["Rohan", "Sohan", "Mohan"];
console.log(names);

console.log(typeof names);
console.log(typeof names[0]);
