{
  // interface in ts

  // example of type alias
  type user = {
    name: string;
    age: number;
    email: string;
  };

  // example of interface
  interface userInterface {
    name: string;
    age: number;
    email: string;
  }

  /**
   * interface vs type alias
   * - type alias is for primitive
   * - interface is for object
   * - interface is more flexible
   * - interface can be extended
   */

  // extend in type alias need intersection
  type myType = user & { role: string };

  // extend in interface using extends
  interface myInterface extends userInterface {
    role: string;
  }

  // array declare with both type alias and interface
  type Roll = number[];
  const roll: Roll = [1, 2, 3, 4, 5];

  interface RollInterface {
    [index: number]: number;
  }
  const rollInterface: RollInterface = [1, 2, 3, 4, 5];

  // function declare with both type alias and interface
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  interface AddInterface {
    (num1: number, num2: number): number;
  }
  const addInterface: AddInterface = (num1, num2) => num1 + num2;

  /**
   * when use type and interface
   * - use type alias when you want to use primitive
   * - use interface when you want to use object
   * - use interface when you want to extend
   * - use type when you want to use array as it's more clean and readable
   * - use type when you want to use function as it's more clean and readable
   * - remember need to code clean and readable
   */
}
