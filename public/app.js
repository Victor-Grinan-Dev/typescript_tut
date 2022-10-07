"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Invoice_1 = require("./classes/Invoice");
const listTemplates_1 = require("./classes/listTemplates");
const payment_1 = require("./classes/payment");
const form = document.querySelector('form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector('ul');
const list = new listTemplates_1.ListTemplate(ul);
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment_1.Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
//# sourceMappingURL=app.js.map