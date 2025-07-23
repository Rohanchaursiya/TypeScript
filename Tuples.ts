// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.

let ourTuple:[number,string,boolean];
ourTuple=[42, "Hello", true];
console.log(ourTuple);
console.log(typeof ourTuple);


// Readonly Tuple
// A good practice is to make your tuple readonly.

let readOnlyTuple: readonly [number, string, boolean] = [42, "Hello", true];
console.log(readOnlyTuple);