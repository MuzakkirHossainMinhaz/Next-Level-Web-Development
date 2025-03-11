{
  // destructure in ts

  // object destructure
  const user = {
    name: {
      firstName: "Muzakkir",
      middleName: "Hossain",
      lastName: "Minhaz",
    },
    age: 24,
    isMarried: true,
    nationality: "Bangladeshi",
    address: {
      city: "Dhaka",
      country: "Bangladesh",
    },
  };

  const {
    name: { firstName },
    nationality,
  } = user;
  // now I can use "firstName" and "nationality"

  const {
    name: { middleName: mName }, // name alias
    isMarried: married, // set new name when destructuring
  } = user;
  // now I can use "mName" and "married"

  // array destructure
  const numbers: number[] = [1, 2, 3, 4, 5];

  const [num1, num2, num3] = numbers;
  /**
   * num1 = 1
   * num2 = 2
   * num3 = 3
   */

  const [, , bestNumber, ...other] = numbers;
  /**
   * bestNumber = 3
   * other = [4, 5]
   */
}
