/*
Class
-Player: Aplayer contains two methods and two properties. The two methods are attack(monster) 
and gainExperience(exp) and the properties are the strength of an attack and the name. 
These properties are setup with the constructor.

-Monster: A monster contains one method and one property. 
Its property is the hp and it is configured via the constructor.
The method should be injure(damage)

*/

class Player {
    private strength: number;
    private name: string;
    
    constructor(strength: number, name: string) {
      this.strength = strength;
      this.name = name;
    }
  
    attack(monster: Monster) {
        //
    }
  
    gainExperience(exp: number) {
        //
    }
}
  
class Monster {
    //
}

const player = new Player(20, "Peter");
const monster = new Monster();
player.attack(monster);


/*
Player Peter attacks a monster (HP: 80)
Player Peter attacks a monster (HP: 60)
Player Peter attacks a monster (HP: 20) [CRITICAL]
Player Peter attacks a monster (HP: 0)
*/