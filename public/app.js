"use strict";
//classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        thi;
        s.amount = a;
    }
    format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('amit ', "work on skyscapper website", 500);
const invTwo = new Invoice('nitish ', "work on tab website", 600);
// console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
//////////////////////////////////////////////////////////////////////////////////////////////
const anchor = document.querySelector('a');
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
// const form = document.querySelector('form');
const form = document.querySelector('.new-item-form');
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const toform = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(toform.value);
    console.log(details.value);
    console.log(amount.value);
});
