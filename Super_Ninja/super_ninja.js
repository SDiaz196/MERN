class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayname() {
        console.log(this.name)
    }

    showStats() {
        console.log(this.name, this.strength, this.speed, this.health)
    }

    drinkSake() {
        this.health += 10;
    }
}


class Sensei extends Ninja {
    constructor(name) {
        super(name)
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;

    }
    speakWisdom() {
        super.drinkSake(); 
        console.log("Good job bud");
    }

    showStats(){
        console.log(`${this.name}, ${this.strength}, ${this.speed},${this.health}`);
    }
} 



const sensei1 = new Sensei("Master Splinter"); 
sensei1.speakWisdom();
sensei1.showStats(); 

const ninja1 = new Ninja("David");





