class Student {
    name: string;
    age: number;
    learningLevel: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.learningLevel = 0;
    }

    learn(hourSpent: number) {
        this.learningLevel += hourSpent * 0.3;
    }

    slack(hourSpent: number) {
        this.learningLevel -= hourSpent * 0.1;
    }
}

const bob = new Student("Bob", 20);
bob.learn(8);
bob.slack(1);
const bob_score = bob.learningLevel;
console.log(bob_score);

const annie = new Student("Annie", 25);
annie.learn(15);
annie.slack(3);
const annie_score = annie.learningLevel;
console.log(annie_score);
