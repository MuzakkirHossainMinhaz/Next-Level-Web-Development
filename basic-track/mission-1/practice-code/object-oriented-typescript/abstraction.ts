{
  // abstraction in ts oops

  /**
   * abstraction makes two ways
   * - interface
   * - abstract
   */

  // interface - understand idea
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    drive(): void;
  }

  class Car implements Vehicle {
    startEngine(): void {
      console.log(`Engine started.`);
    }

    stopEngine(): void {
      console.log(`Engine stopped`);
    }

    drive(): void {
      console.log(`Car is driving`);
    }
  }

  // abstract class

  // understand idea
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract drive(): void;
  }

  class Toyota extends Car2 {
    startEngine(): void {
      console.log(`Engine started.`);
    }

    stopEngine(): void {
      console.log(`Engine stopped`);
    }

    drive(): void {
      console.log(`Car is driving`);
    }
  }
}
