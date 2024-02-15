class Student {
  name: string;
  age: number;
  city: string

  constructor(name: string, age: number, city: string) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

}

let john = new Student("John", 17, "Tallinn");
let mary = new Student("Mary", 18, "Tartu");
let alex = new Student("Alex", 18, "London");
let gregor = new Student("Gregor", 19, "Brasilia");

console.log(john.name);
console.log(mary.age);
console.log(gregor.name);
console.log(gregor.city);