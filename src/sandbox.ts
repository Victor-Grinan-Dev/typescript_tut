let user1 = "Luigi";
let age = 10;
let is_black_belt = false;

const circ = (diameter:number) => {
    return diameter * Math.PI;
}

const mixArr : (string|number)[] = [];

mixArr.push(23);
mixArr.push("23");

let ninjaOne:object;
let ninjaTwo:{};

//dont use this:
let x: any = 25;
x = "25";

let customFunc: Function;

customFunc = () =>{
    console.log('hello');
}

const add = (a: number, b: number, c?:string|number)=>{
    console.log(a + b);
    console.log(c);
}

add(10,5, "mierda")