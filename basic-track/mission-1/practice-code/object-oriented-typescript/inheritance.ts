{
  // inheritance in oop ts
  class Person {
    name: string;
    age: number;
    gender: string;

    constructor(name: string, age: number, gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    getSleep(numberOfHours: number) {
      console.log(`The ${this.name} is sleeping ${numberOfHours} hours`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, gender: string) {
      super(name, age, gender);
    }
  }

  const student1 = new Student("Mr. Student", 24, "Male");

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      gender: string,
      designation: string
    ) {
      super(name, age, gender);
      this.designation = designation;
    }

    getTeachingHours(numberOfHours: number) {
      console.log(
        `The teacher ${this.name} is teaching ${numberOfHours} hours`
      );
    }
  }

  const teacher1 = new Teacher("Mr. Teacher", 54, "Male", "Teacher");
}
