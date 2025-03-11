{
  // encapsulation in ts

  /**
   * about encapsulation
   * - to hide the implementation details
   * - to hide the state
   * - to hide the behavior
   * - to hide the data
   */

  class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    getName() {
      return this.name;
    }

    setName(name: string) {
      this.name = name;
    }

    private getAge() {
      return this.age;
    }

    getHideAge() {
      return this.getAge();
    }
  }

  const person = new Person("John", 30);
  console.log(person.getName());
  person.setName("Jane");
  console.log(person.getName());
}
