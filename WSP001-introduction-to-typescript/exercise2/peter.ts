/* Javascript
const peter = {
  name: "Peter",
  age: 50,
  students: [
    { name: "Andy", age: 20 },
    { name: "Bob", age: 23 },
    {
      name: "Charlie",
      age: 25,
      exercises: [{ score: 60, date: new Date("2019-01-05") }],
    },
  ],
};
*/

// TypeScript
// parameter?: type | undefine
const peter: { 
  name: string, 
  age: number, 
  students: { name: string, age: number, exercises?: { score: number, date: Date }[] }[] } = {
    name: "Peter",
    age: 50,
    students: [
      { name: "Andy", age: 20 },
      { name: "Bob", age: 23 },
      {
        name: "Charlie",
        age: 25,
        exercises: [{ score: 60, date: new Date("2019-01-05") }],
      },
    ],
};


// parameter: type | undefined = undefined
interface Exercise {
  score: number;
  date: Date;
}

interface Student {
  name: string;
  age: number;
  exercises?: Exercise[]; // Optional property
}

interface Person {
  name: string;
  age: number;
  students: Student[];
}

const peter1: Person = {
  name: "Peter",
  age: 50,
  students: [
    { name: "Andy", age: 20 },
    { name: "Bob", age: 23 },
    {
      name: "Charlie",
      age: 25,
      exercises: [{ score: 60, date: new Date("2019-01-05") }],
    },
  ],
};


console.log(peter.students[0].name);
console.log(peter.students[2]);

// we use optional chaining
// ? to access potentially undefined properties
// ?? to provide a default value if the property is undefined