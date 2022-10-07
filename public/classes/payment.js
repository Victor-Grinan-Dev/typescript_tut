"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
class Payment {
    constructor(recipent, details, amount) {
        this.recipent = recipent;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipent} is owed $${this.amount} for ${this.details}`;
    }
}
exports.Payment = Payment;
//# sourceMappingURL=payment.js.map