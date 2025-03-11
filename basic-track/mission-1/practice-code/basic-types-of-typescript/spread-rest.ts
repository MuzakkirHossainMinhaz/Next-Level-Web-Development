{
  // spread operator with array
  const numbers1: number[] = [1, 2, 3, 4, 5];
  const numbers2: number[] = [6, 7, 8, 9, 10];

  numbers1.push(...numbers2);
  const numbers3: number[] = [...numbers1, ...numbers2];

  // spread operator with object
  const userInfo1 = {
    firstName: "Muzakkir",
    lastName: "Minhaz",
    age: 24,
  };

  const userInfo2 = {
    isMarried: true,
    nationality: "Bangladeshi",
  };

  const userInfo = { ...userInfo1, ...userInfo2 };

  // rest operator
  const greetings = (...friends: string[]) => {
    friends.forEach((friend: string) => {
      console.log(`Hello ${friend}`);
    });
  };

  greetings("Muzakkir", "Cristiano", "Messi", "Mbappe");
}
