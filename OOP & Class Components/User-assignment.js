class User {	// declare a class and give it name User
    constructor(name, email) {
        this.name = name
        this.email = email
        this.accountBalance = 0
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount;
    }
    makeDeposit(amount) {                // takes a parameter this is the amount of the deposit
        this.accountBalance += amount;   // the specific user's account increases by the amount of the value received
    }
    displayBalance(){
        console.log(`User: ${this.name}, Balance: $${this.accountBalance}`);
    }
    transferMoney(amount, otherUser){
        this.accountBalance -= amount;
        otherUser.makeDeposit(amount);
    }
}

// const guido = new User("Guido van Rossum", "guido@python.com");
const will = new User("Will Smith", "wsmith@gmail.com");
const chris = new User("Chris Rock", "crock@gmail.com");
const jada = new User("Jada Pinkett", "jpinkett@gmail.com");
will.makeDeposit(1000);
will.makeDeposit(500);
will.makeDeposit(250);
will.makeWithdrawal(200);
will.displayBalance();
chris.makeDeposit(100);
chris.makeDeposit(300);
chris.makeWithdrawal(50);
chris.displayBalance();
jada.makeDeposit(10000);
jada.makeWithdrawal(10);
jada.makeWithdrawal(10);
jada.makeWithdrawal(10);
jada.displayBalance();
will.transferMoney(550, jada);
will.displayBalance();
jada.displayBalance();


// console.log(will.accountBalance);
// console.log(will.displayBalance());

// console.log(will.displayBalance());