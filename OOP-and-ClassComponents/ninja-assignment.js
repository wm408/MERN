class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
        return this;
    }
    showStats() {
        console.log(
        `The Ninja's name is: ${this.name}, who has health of ${this.health}, speed of ${this.speed}, and strength of ${this.strength}.`);
        return this;
    }
    drinkSake() {
        this.health += 10;
        return this;
    }
}

const will = new Ninja("Will", 300);

will.sayName().drinkSake().showStats();