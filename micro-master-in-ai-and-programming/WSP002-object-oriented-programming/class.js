var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
        this.learningLevel = 0;
    }
    Student.prototype.learn = function (hourSpent) {
        this.learningLevel += hourSpent * 0.3;
    };
    Student.prototype.slack = function (hourSpent) {
        this.learningLevel -= hourSpent * 0.1;
    };
    return Student;
}());
// 10
var bob = new Student("Bob", 20);
bob.learn(8);
bob.slack(1);
var bob_score = bob.learningLevel;
console.log(bob_score);
// 20
var annie = new Student("Annie", 25);
annie.learn(15);
annie.slack(3);
var annie_score = annie.learningLevel;
console.log(annie_score);
