export class Invoice {
    constructor(readonly beneficiary: string, private details: string, public amount: number) {}
    format() {
      return `${this.beneficiary} is benefited with $${this.amount} for ${this.details}`;
    }
  }