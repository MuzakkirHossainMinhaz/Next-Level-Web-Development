{
  // statics in ts oop

  class Counter {
    static count: number = 0;
    increment() {
      return (Counter.count += 1);
    }

    decrement() {
      return (Counter.count -= 1);
    }
  }

  const counter = new Counter();
  console.log(counter.increment());
  console.log(counter.increment());
}
