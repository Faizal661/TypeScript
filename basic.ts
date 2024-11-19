// Type annotations in TypeScript are used to explicitly define the 
//  -data types of variables, function parameters, and return values.
// This helps improve code readability, maintainability, 
//  -and catches potential type errors during development.

// Primitive types
let name: string = "Alice";
let age: number = 30;
let isStudent: boolean = true;

// Array type
let numbers: number[] = [1, 2, 3];

// Tuple type (fixed-length array with specific types)
let person: [string, number] = ["Bob", 25];

// Object type
let car: {
  brand: string;
  model: string;
  year: number;
} = {
  brand: "Toyota",
  model: "Camry",
  year: 2023
};

// Function type
function greet(name: string): void {
  console.log("Hello, " + name + "!");
}


export {}