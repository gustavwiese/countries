const number: number = 1;
number.valueOf();

const numbers: Array<number> = [];
numbers.push(1);

interface Person {
  id?: number;
  name: string;
  age: number;
}

const persons: Array<Person> = [];

persons.push({ name: "John", age: 30 });

function createPerson(name: string, age: number): Person {
  return { name, age };
}

const p = createPerson("John", 30);
persons.push(p);
