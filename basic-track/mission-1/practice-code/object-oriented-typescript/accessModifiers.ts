{
  // access modifiers in ts

  // public
  // private
  // protected
  // readonly
  // static
  // abstract

  /**
   * about public access modifiers
   * - can access from anywhere
   *
   * about private access modifiers
   * - can access from within the class
   * - can't access from outside the class
   *
   * about protected access modifiers
   * - can access from within the class
   * - can't access from outside the class
   * - can access from child class
   *
   * about readonly access modifiers
   * - can access from within the class
   * - can't access from outside the class
   * - can't access from child class
   * - can't reassign
   *
   * about static access modifiers
   * - can access from within the class
   * - can't access from outside the class
   * - can't access from child class
   * - can't reassign
   *
   * about abstract access modifiers
   * - can't access from outside the class
   * - can't access from child class
   * - can't reassign
   */

  class BankAccount {
    readonly _accountNumber: number;
    _accountName: string;
    private _balance: number;

    constructor(accountNumber: number, accountName: string, balance: number) {
      this._accountNumber = accountNumber;
      this._accountName = accountName;
      this._balance = balance;
    }

    getBalance() {
      return this._balance;
    }

    withdraw(amount: number) {
      this._balance = this._balance - amount;
    }

    deposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }
}
