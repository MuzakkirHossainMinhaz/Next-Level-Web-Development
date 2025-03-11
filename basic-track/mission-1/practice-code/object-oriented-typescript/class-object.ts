{
  // class and object in ts

  // class
  class Animal {
    // name: string;
    // age: number;
    // sound: string;

    // constructor(name: string, age: number, sound: string) {
    //     this.name = name;
    //     this.age = age;
    //     this.sound = sound;
    // }

    // using parameter properties
    constructor(
      public name: string,
      public age: number,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} is makes ${this.sound}!`);
    }
  }

  // object
  const dog = new Animal("Dog", 5, "bark");
  dog.makeSound();

  const cat = new Animal("Cat", 3, "meow");
  cat.makeSound();
}
