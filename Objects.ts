// TypeScript Object Types

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

console.log(car);
console.log(typeof car);

// Optional Properties
// Optional properties are properties that don't have to be defined in the object definition.

const Car: { type: string, mileage?: number } = { // no error
    type: "Toyota"
};
Car.mileage = 2000;
console.log(Car);
console.log(typeof Car);


// Readonly Properties
// Readonly properties are properties that cannot be changed after the object is created.
const ReadonlyCar: { readonly type: string, model: string } = {
    type: "Honda",
    model: "Civic"
};

console.log(ReadonlyCar);

// Index Signatures
// Index signatures can be used for objects without a defined list of properties.

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

// Index signatures like this one can also be expressed with utility types like Record<string, number>.