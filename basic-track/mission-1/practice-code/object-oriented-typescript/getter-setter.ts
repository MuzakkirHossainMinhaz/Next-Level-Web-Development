{
  // getter and setter in typescript oop

  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // getter
    get getName() {
      return this.name;
    }

    // setter
    set setName(name: string) {
      this.name = name;
    }
  }

  const person = new Person("John Doe", 34);

  // call a function like a property
  console.log(person.getName); // John Doe

  // call a function like a property
  person.setName = "Jane Doe";
}
