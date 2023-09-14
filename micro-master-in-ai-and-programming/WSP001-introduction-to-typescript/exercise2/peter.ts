/*
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

const peter: { name: string, age: number, students: { name: string, age: number, exercises?: { score: number, date: Date }[] }[] } = {
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