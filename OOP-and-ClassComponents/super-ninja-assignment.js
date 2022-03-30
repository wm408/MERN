// Extend the Ninja class and create the Sensei class. 
//    A Sensei should have 200 Health, 10 speed, and 10 strength by default. 
//    In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. 
//    Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

class Ninja {
    constructor (name, health, speed = 3, strength = 3){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    }

    sayName() {
    console.log(`Ninja's name is: ${this.name}`);
    return this;
    }

    showStats() {
    console.log(`Stats for: ${this.name}`);
    console.log(`Health: ${this.health}`);
    console.log(`Speed: ${this.speed}`);
    console.log(`Strength ${this.strength}`);
    return this;
    }

    drinkSake() {
    this.health += 10;
    console.log(`${this.name} has enjoyed some Sake, health has increased to: ${this.health}`);
    return this;
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength); //  Super is a special function that allows us to call the constructor of the parent class
            this.wisdom = wisdom;
    }

    speakWisdom() {
    console.log("Speaking wisdom...");
    this.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months")
    return this;
    }
}

const will1 = new Ninja("Will1", 100);
will1.sayName().showStats().drinkSake();

const will2 = new Ninja("Will2", 50, 27, 59);
will2.sayName().showStats().drinkSake();

const beam = new Sensei("Sensei Beam");
beam.showStats().speakWisdom();
