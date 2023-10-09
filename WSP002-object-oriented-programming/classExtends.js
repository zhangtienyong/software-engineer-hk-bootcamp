var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CodingStudent = /** @class */ (function (_super) {
    __extends(CodingStudent, _super);
    function CodingStudent(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.learningLevel = 10;
        return _this;
    }
    CodingStudent.prototype.learn = function (hourSpent) {
        this.learningLevel += hourSpent * 0.5;
    };
    CodingStudent.prototype.slack = function (hourSpent) {
        _super.prototype.slack.call(this, hourSpent);
        this.learningLevel -= hourSpent * 0.3;
    };
    CodingStudent.prototype.readReddit = function (hourSpent) {
        this.learningLevel += hourSpent * 0.2;
    };
    return CodingStudent;
}(Student));
var TeckyStudent = new CodingStudent("Tien", 32);
TeckyStudent.learn(10000);
TeckyStudent.slack(100);
TeckyStudent.readReddit(200);
console.log(TeckyStudent.learningLevel);
