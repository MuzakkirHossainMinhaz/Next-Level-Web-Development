{
  // generic function

  function getArray<T>(items: T): T[] {
    return [items];
  }

  // function with generic of array
  const numberArray = getArray<number>(123);
  const stringArray = getArray<string>("Hello");

  type User = {
    name: string;
    id: number;
  };

  // function with generic of object
  const users = getArray<User>({ name: "Muzakkir", id: 1 });

  // function with generic of tuple
  const getTuple = <P, Q>(item1: P, item2: Q): [P, Q] => {
    return [item1, item2];
  };

  const tupleArray = getTuple<string, number>("Muzakkir", 10);
  const tupleArrayWithObject = getTuple<User, number>(
    { name: "Muzakkir", id: 1 },
    10
  );
}
