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
        console.log(`Balance is: ${this.account.balance}`);
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

class User {	// declare a class and give it name User
    constructor(name, email) {
        this.name = name
        this.email = email
        this.account = new BankAccount();
    }
    makeWithdrawal(amount){
        this.account.withdraw(amount);
        return this;
    }
    makeDeposit(amount) {                // takes a parameter this is the amount of the deposit
        this.account.deposit(amount);   // the specific user's account increases by the amount of the value received
        return this;
    }
    displayBalance(){
        console.log(`User: ${this.name}, Balance: $${this.account.balance} Interest Rate: ${this.account.intRate}`);
    }
    transferMoney(amount, otherUser){
        this.account.withdraw(amount);
        // otherUser.makeDeposit(amount);
        otherUser.makeDeposit(amount);
    }
}

// need to add interest rate as attribute.
const will = new User("Will Smith", "wsmith@gmail.com");
const jada = new User("Jada Pinkett", "jpinkett@gmail.com");

will.makeDeposit(200).displayBalance();
jada.makeDeposit(500).displayBalance();
jada.transferMoney(100, will);
will.displayBalance();
jada.displayBalance();