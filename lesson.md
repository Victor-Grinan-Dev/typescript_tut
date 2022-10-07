##

```ts

```

## basics

```ts
//let age:number = 20;
//if (age<50)
//    age += 10;
//console.log(age);

let sale: number = 123_456_789;
let course: string = "typescript";
let published = true;
let level;

/* error 1 */
//let numbers: number[] = [1, 2, '3'];

/* error 2 */
//let numbers: number[] = [];
//numbers[0]=1;
//numbers[1]='2';

/* auto complition */
let numbers: number[] = [];
numbers.forEach((n) => n * n);

/* tuples (multy types array) */
let user: [number, string] = [1, "victor"];
//ts doesnt complain about pushing to a tuple... but dont push to a tuple.
user.push(1);

enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize = Size.Medium;
console.log(mySize);

//compailer generates more optimized code of enums with constants
const enum Size1 {
  Small = 1,
  Medium,
  Large,
}
let mySize1 = Size1.Medium;
console.log(mySize);

function taxCalc(income: number, taxYear: number = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

taxCalc(10_000, 2022);

/* Objects */
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void; // takes a function retire(date) of Date type, and no return.
} = {
  id: 1,
  name: "Victor",
  retire: (date: Date) => {
    console.log(date);
  },
};

/* custom type */
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: "Machete",
  retire: (date: Date) => {
    console.log(date);
  },
};

function kgToLbs(weight: number | string): number {
  //narrowing
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

/* interception types */

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

/* literal annotation */
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "km";
let distance: Metric = "cm";

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(null);
greet(undefined);
greet("Victor");

//array
let arr = ["uno", 2, false];
arr[0] = 1;
arr[1] = true;
arr[2] = "dos";

//tuple
let tuple: [string, number, boolean] = ["uno", 2, false];
tuple[0] = "dos";
tuple[1] = 1;
tuple[2] = true;

// function signatures

let sigFunc: (a: string, b: number) => void;

sigFunc = (name: string, age: number) => {
  console.log(name, age);
};
```

##

```ts
let user1 = "Luigi";
let age = 10;
let is_black_belt = false;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

const mixArr: (string | number)[] = [];

mixArr.push(23);
mixArr.push("23");

let ninjaOne: object;
let ninjaTwo: {};

//dont use this:
let x: any = 25;
x = "25";

let customFunc: Function;

customFunc = () => {
  console.log("hello");
};

const add = (a: number, b: number, c?: string | number) => {
  console.log(a + b);
  console.log(c);
};

add(10, 5, "mierda");
```

## type aliases:

```ts
type StringOrNum = string | number;
type ObjectWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: String) => {
  console.log(uid, item);
};

const greetAgain = (user: ObjectWithName) => {
  console.log(user.name, "says hello!");
};
```

## classes:

```ts
class Invoice {
  client: string;
  details: string;
  amount: number;
  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }
  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

let invOne = new Invoice("Mario", "worked in the kitchen", 100);
let invtwo = new Invoice("luigi", "worked in the garden", 120);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invtwo);
```

## Modules:

import and export with es6, same way you will do it in javascript.

## access modifiers: public, private, readonly.

```ts
class Payment {
  readonly client: string;
  private details: string;
  public amount: number;
  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }
  format() {
    return `${this.client} owns ${this.amount} for ${this.details}`;
  }
}
```

## Interfaces

```ts
export interface HasFormatter {
  format(): string; //format method
}

export class Transffer implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} beneffits of  £${this.amount} for ${this.details}`;
  }
}
```

##

```ts

```
