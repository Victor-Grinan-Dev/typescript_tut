import { Invoice } from "./classes/Invoice";
import { ListTemplate } from "./classes/listTemplates";
import { Payment } from "./classes/payment";
import { HasFormatter } from "./interfaces/hasFormatter";

const form = document.querySelector('form');

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom')as HTMLInputElement;
const details = document.querySelector('#details')as HTMLInputElement;
const amount = document.querySelector('#amount')as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul)

form?.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc:HasFormatter;

    if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
})