// TypeScript Enums

// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.

// Numeric Enums - Defaults
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up); // 0
console.log(Direction.Down); // 1
console.log(Direction.Left); // 2
console.log(Direction.Right); // 3

// Numeric Enums - initialized
enum Status {
    north = 1,
    south,
    east,
    west,
}
console.log(Status.north); // 1
console.log(Status.south); // 2
console.log(Status.east); // 3
console.log(Status.west); // 4

// Numeric Enums - Fully Initialized
enum HttpStatus {
    OK = 200,
    Created = 201,
    Accepted = 202,
    NoContent = 204,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError = 500
}
console.log(HttpStatus.OK); // 200
console.log(HttpStatus.Created); // 201
console.log(HttpStatus.Accepted); // 202
console.log(HttpStatus.NoContent); // 204
console.log(HttpStatus.BadRequest); // 400
console.log(HttpStatus.Unauthorized); // 401
console.log(HttpStatus.Forbidden); // 403
console.log(HttpStatus.NotFound); // 404
console.log(HttpStatus.InternalServerError); // 500

// String Enums
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
console.log(Color.Red); // "RED"
console.log(Color.Green); // "GREEN"
console.log(Color.Blue); // "BLUE"