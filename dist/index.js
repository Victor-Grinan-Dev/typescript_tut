"use strict";
let sale = 123456789;
let course = 'typescript';
let published = true;
let level;
let numbers = [];
numbers.forEach(n => n * n);
let user = [1, 'victor'];
user.push(1);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
;
let mySize1 = 2;
console.log(mySize);
function taxCalc(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
taxCalc(10000, 2022);
let employee = {
    id: 1,
    name: 'Victor',
    retire: (date) => {
        console.log(date);
    }
};
let employee1 = {
    id: 1,
    name: "Machete",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
//# sourceMappingURL=index.js.map