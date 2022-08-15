

class Ninja {
    constructor(health,speed,strength) {
        this.health = health;
        this.speed = speed;
        this.strength = strength;

        const ninja1 = new Ninja(100,3,3);
        ninja1.sayName()
        ninja1.showStats()
        ninja1.drinkSake()
        console.log(this.name);


    }

    sayName(){
        this.name = name;
        console.log('your name: ${name}');
    }

    showStats(){
        this.name
        this.health
        this.speed
        this.strength
        console.log("name: ${name} health: ${health} speed: ${speed} strength:${strength}")
    }


    drinkSake(){
        this.health +=10;
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();