

class Ninja {
    constructor(name,health,speed= 3,strength =3) {
        this.name= name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;


    }

    sayName(){
        // this.name = name;
        console.log(`your name: ${this.name}`);
    }

    showStats(){
        this.name
        this.health
        this.speed
        this.strength
        console.log(`name: ${this.name} health: ${this.health} speed: ${this.speed} strength:${this.strength}`)
    }


    drinkSake(){
        this.health +=10;
    }

}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();



class Sensei extends Ninja {
    constructor(name,health,speed,strength ,winsdom=10) {
        super(name,100,20,30);
        this.winsdom = winsdom;


    }

    speakWinsdom(){
        super.drinkSake()
        console.log(
            `winsdom : ${this.winsdom}`
        );

    }

}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWinsdom();
superSensei.showStats();
