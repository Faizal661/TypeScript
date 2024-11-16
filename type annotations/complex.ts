// Union types

let value: string | number = "hello";
value = 42;

// Intersection types

interface Person {
  name: string;
  age: number;
}

interface Employee {
  salary: number;
  position: string;
}

type PersonEmployee = Person & Employee;

let employee: PersonEmployee = {
  name: "John",
  age: 30,
  salary: 50000,
  position: "Engineer",
};


// Generic Types

function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
