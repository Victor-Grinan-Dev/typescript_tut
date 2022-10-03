//let age:number = 20;
//if (age<50)
//    age += 10;
//console.log(age);

let sale:number = 123_456_789;
let course: string = 'typescript';
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
numbers.forEach(n => n*n); 

/* tuples (multy types array) */
let user:[number, string] = [1, 'victor'];
//ts doesnt complain about pushing to a tuple... but dont push to a tuple.
user.push(1);

enum Size {Small = 1, Medium, Large};
let mySize = Size.Medium;
console.log(mySize);

//compailer generates more optimized code of enums with constants
const enum Size1 {Small = 1, Medium, Large};
let mySize1 = Size1.Medium;
console.log(mySize);

function taxCalc(income:number, taxYear: number = 2022): number{
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

taxCalc(10_000, 2022);

/* Objects */
let employee: {
    readonly id:number,
    name:string,
    retire:(date:Date) => void // takes a function retire(date) of Date type, and no return.
} = {
    id: 1,
    name: 'Victor',
    retire: (date:Date) => {
        console.log(date);
    }
}

/* custom type */
type Employee = {
    readonly id:number,
    name:string,
    retire: (date:Date) => void
}

let employee1:Employee = {
    id: 1,
    name: "Machete",
    retire: (date:Date) => {
        console.log(date);
    }
}

function kgToLbs(weight:number | string):number{
    //narrowing
    if(typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
};

/* interception types */

type Draggable = {
    drag:()=>void
};

type Resizable = {
    resize:()=>void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag:()=>{},
    resize:()=>{}
};

/* literal annotation */
type Quantity = 50 | 100;
let quantity:Quantity = 100;

type Metric = 'cm' | 'km';
let distance: Metric = "cm";

function greet(name:string | null | undefined){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}

greet(null);
greet(undefined);
greet('Victor');