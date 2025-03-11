{
  // polymorphism in ts oop

  class Person {
    getSleep(numberOfHours: number = 8) {
      console.log("I am sleeping for " + numberOfHours + " hours");
    }
  }

  class Student extends Person {
    getSleep(numberOfHours: number = 6) {
      console.log("I am sleeping for " + numberOfHours + " hours");
    }
  }

  class Developer extends Person {
    getSleep(numberOfHours: number = 4) {
      console.log("I am sleeping for " + numberOfHours + " hours");
    }
  }

  const numberOfSleepingHours = (person: Person) => {
    person.getSleep();
  };

  // numberOfSleepingHours(new Person());
  // numberOfSleepingHours(new Student());
  // numberOfSleepingHours(new Developer());

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
      super();
      this.radius = radius;
    }

    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }

  class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }

    getArea(): number {
      return this.width * this.height;
    }
  }

  const calculateArea = (shape: Shape) => {
    console.log(shape.getArea());
  };

  // calculateArea(new Shape());
  // calculateArea(new Circle(5));
  // calculateArea(new Rectangle(10, 5));
}
