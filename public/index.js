"use strict";
var sale = 123456789;
var course = 'typescript';
var published = true;
var level;
var numbers = [];
numbers.forEach(function (n) { return n * n; });
var user = [1, 'victor'];
user.push(1);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var mySize = Size.Medium;
console.log(mySize);
;
var mySize1 = 2;
console.log(mySize);
function taxCalc(income, taxYear) {
    if (taxYear === void 0) { taxYear = 2022; }
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
taxCalc(10000, 2022);
var employee = {
    id: 1,
    name: 'Victor',
    retire: function (date) {
        console.log(date);
    }
};
var employee1 = {
    id: 1,
    name: "Machete",
    retire: function (date) {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
;
var textBox = {
    drag: function () { },
    resize: function () { }
};
var quantity = 100;
var distance = "cm";
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(null);
greet(undefined);
greet('Victor');
//# sourceMappingURL=index.js.map