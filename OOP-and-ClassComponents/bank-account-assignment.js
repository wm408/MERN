class BankAccount {
    constructor(intRate, balance) {
        if (balance) {
            this.balance = balance
        } else {
            this.balance = 0;
        }
        this.intRate = intRate / 100;
    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        if (this.balance - amount < 0) {
            console.log('Insufficient funds: Charging a $5 fee')
            this.balance -= 5;
        } else {
            this.balance -= amount;
        }
        return this;
    }
    displayAccountInfo() {
        console.log(`Balance is: ${this.balance}`);
        return this;
    }
    yieldInterest() {
        if (this.balance > 0) {
            this.balance = (this.balance * this.intRate) + this.balance;
        } else {
            console.log('Zero balance, no interest');
        }
        return this;
    }
}

const will1 = new BankAccount(5, 100);
const nik1 = new BankAccount(10, 200);

will1.deposit(10).deposit(10).deposit(5).withdraw(10).yieldInterest().displayAccountInfo();

nik1.deposit(20).deposit(20).withdraw(5).withdraw(5).withdraw(5).withdraw(30).yieldInterest().displayAccountInfo();