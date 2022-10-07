"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(beneficiary, details, amount) {
        this.beneficiary = beneficiary;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.beneficiary} is benefited with $${this.amount} for ${this.details}`;
    }
}
exports.Invoice = Invoice;
//# sourceMappingURL=transfer.js.map