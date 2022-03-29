class User {	// declare a class and give it name User
    constructor(name, email) {
        this.name = name
        this.email = email
        this.accountBalance = 0
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount;
        return this;
    }
    makeDeposit(amount) {                // takes a parameter this is the amount of the deposit
        this.accountBalance += amount;   // the specific user's account increases by the amount of the value received
        return this;
    }
    displayBalance(){
        console.log(`User: ${this.name}, Balance: $${this.accountBalance}`);
        return this;
        
    }
    transferMoney(amount, otherUser){
        this.accountBalance -= amount;
        otherUser.makeDeposit(amount);
        return this;
    }
}

const will = new User("Will Smith", "wsmith@gmail.com");
const chris = new User("Chris Rock", "crock@gmail.com");
const jada = new User("Jada Pinkett", "jpinkett@gmail.com");
will.makeDeposit(1000).makeDeposit(500).makeDeposit(250).makeWithdrawal(200).displayBalance();
chris.makeDeposit(100).makeDeposit(300).makeWithdrawal(50).displayBalance();
jada.makeDeposit(10000).makeWithdrawal(10).makeWithdrawal(10).makeWithdrawal(10).displayBalance();
will.transferMoney(550, jada).displayBalance();
jada.displayBalance();