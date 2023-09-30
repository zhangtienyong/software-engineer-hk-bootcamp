class Player {
    strength;
    name;
  
    constructor(strength, name) {
      this.strength = strength;
      this.name = name;
    }
  
    attack(monster) {
      const damage = this.strength;
      monster.injure(damage);
    }
  
    gainExperience(exp) {
      // implementation for gaining experience
      this.experience = this.strength / exp;
      console.log(this.experience);
    }
  }
  
  class Monster {
    hp;
  
    constructor() {
      this.hp = 100;
    }
  
    injure(damage) {
      this.hp -= damage;
      if (this.hp <= 0) {
        console.log(`Player ${player.name} attacks a monster (HP: 0)`);
      } else if (this.hp <= 20) {
        console.log(`Player ${player.name} attacks a monster (HP: ${this.hp}) [CRITICAL]`);
      } else {
        console.log(`Player ${player.name} attacks a monster (HP: ${this.hp})`);
      }
    }
  }
  
  const player = new Player(20, "Peter");
  const monster = new Monster();
  player.attack(monster);
  player.attack(monster);
  player.attack(monster);
  player.attack(monster);
  player.gainExperience(5);