{
  // type guard using typeof, in, and instanceof

  // using typeof operator

  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2; // numeric sum
    } else {
      return param1.toString() + param2.toString(); // string concatenate
    }
  };

  // using in operator

  type User = {
    name: string;
  };

  type Admin = {
    name: string;
    role: "admin";
  };

  const getUser = (user: User | Admin) => {
    if ("role" in user) {
      return `I am an admin and my role is ${user.role}`;
    } else {
      return `I am a user and my name is ${user.name}`;
    }
  };

  // instanceof operator

  class Person {
    name: string;
    gender: string;
    age: number;

    constructor(name: string, gender: string, age: number) {
      this.name = name;
      this.gender = gender;
      this.age = age;
    }

    makeSound() {
      console.log("I am making sound");
    }
  }

  class Employee extends Person {
    designation: string;

    constructor(
      name: string,
      gender: string,
      age: number,
      designation: string
    ) {
      super(name, gender, age);
      this.designation = designation;
    }

    makeCall() {
      console.log("I am calling...");
    }
  }

  class Farmer extends Person {
    area: string;

    constructor(name: string, gender: string, age: number, area: string) {
      super(name, gender, age);
      this.area = area;
    }

    makeHarvest() {
      console.log("I am harvesting...");
    }
  }

  const employee = new Employee("John", "Male", 32, "Software Engineer");
  const farmer = new Farmer("Sarah", "Female", 28, "Pune");
  const person = new Person("Tom", "Male", 25);

  // const getDetails = (person: Person) => {
  //     if (person instanceof Employee) {
  //         person.makeCall();
  //     } else if (person instanceof Farmer) {
  //         person.makeHarvest();
  //     } else {
  //         person.makeSound();
  //     }
  // };

  // smart way to handle this
  const isEmployee = (person: Person): person is Employee => {
    return person instanceof Employee;
  };

  const isFarmer = (person: Person): person is Farmer => {
    return person instanceof Farmer;
  };

  const getDetails = (person: Person) => {
    if (isEmployee(person)) {
      person.makeCall();
    } else if (isFarmer(person)) {
      person.makeHarvest();
    } else {
      person.makeSound();
    }
  };
}
