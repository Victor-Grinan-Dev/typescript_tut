export class Payment {
    constructor(readonly recipent: string, private details: string, public amount: number) {}
    format() {
      return `${this.recipent} is owed $${this.amount} for ${this.details}`;
    }
  }