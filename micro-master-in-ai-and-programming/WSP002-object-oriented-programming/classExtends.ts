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

class CodingStudent extends Student {
    constructor(name: string, age: number) {
        super(name, age);
        this.learningLevel = 10;
    }
    learn(hourSpent: number) {
        this.learningLevel += hourSpent * 0.5;
    }
    slack(hourSpent: number) {
        super.slack(hourSpent);
        this.learningLevel -= hourSpent * 0.3;
    }

    readReddit(hourSpent: number) {
        this.learningLevel += hourSpent * 0.2;
    }
}

const TeckyStudent = new CodingStudent("Tien", 32);
TeckyStudent.learn(10000);
TeckyStudent.slack(100);
TeckyStudent.readReddit(200);
console.log(TeckyStudent.learningLevel);
