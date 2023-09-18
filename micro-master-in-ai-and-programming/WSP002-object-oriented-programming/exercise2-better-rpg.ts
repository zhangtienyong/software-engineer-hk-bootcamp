/*
A Better RPG - Players
A better RPG will have multiple types of players that you can choose. And their ability will be as follow

Player Types | Primary Attack(Damage) | Secondary Attack(Damage)
Amazon       | Bow and Arrow(30)      | Throwing Spear(40)
Paladin      | Swords(50)             | Magic Spells(25)
Barbarian    | Swords(55)             | Throwing Spear(30)

With the first column being the primary attack , second column being the secondary attack.
Players can switch by altering a boolean property called usePrimaryAttack which by default should be true.
Inside the bracket, you can find the damage of each different type of attack.
The damage on the monsters should depends on the type of damage.

Bonus Exercise
Please implement the business logic of each player without declaring each type of player as a separate class. 
You may be able to get some insight from the following article regarding composition.

*/

interface Attack {
    damage: number;
  }
  
  class BowAndArrow implements Attack {
    //Bow and Arrow Attack here
  }
  
  class ThrowingSpear implements Attack {
    // Throwing Spear Attack here
  }
  
  interface Player {
    attack(monster: Monster): void;
    switchAttack(): void;
    gainExperience(exp: number): void;
  }
  
  class Amazon implements Player {
    private primary: Attack;
    private secondary: Attack;
    private usePrimaryAttack: boolean;
    constructor() {
      this.primary = new BowAndArrow(/*Need some params here*/);
      this.secondary = new ThrowingSpear(/*Need some params here*/);
      // TODO: set the default value of usePrimaryAttack
    }
  
    attack(monster: Monster): void {
      if (this.usePrimaryAttack) {
        // TODO: use primary attack
      } else {
        // TODO: use secondary attack
      }
    }
  
    switchAttack() {
      // TODO: Change the attack mode for this player
    }
  
    //.. The remaining methods.
  }
  
  class Monster {
    // You can use the `Monster` before
  }
  