// normal function in ts with default value
function addNumbers(num1: number, num2: number, num3: number = 10): number {
  return num1 + num2 + num3;
}

addNumbers(1, 3);

// arrow function in ts
const addTowNumbers = (num1: number, num2: number): number => num1 + num2;

addTowNumbers(1, 3);

// object --> function  --> method
const userInfo: {
  firstName: string;
  lastName: string;
  fullName: () => string;
} = {
  firstName: "Muzakkir Hossain",
  lastName: "Minhaz",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
};

// array using map()
const squareNumbers: number[] = [1, 2, 3, 4, 5];

const newNumbers: number[] = squareNumbers.map(
  (number: number): number => number * number
);
