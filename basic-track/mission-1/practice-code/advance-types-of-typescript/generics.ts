{
  // generics

  // const studentID: number[] = [1, 2, 3, 4, 5, 6];
  // const studentID: Array<number> = [1, 2, 3, 4, 5, 6]; // also can defined like this

  // const studentName: string[] = ["Muzakkir", "Hossain", "Minhaz"];
  // const studentName: Array<string> = ["Muzakkir", "Hossain", "Minhaz"];

  // const student: (number | string)[] = [1, "Muzakkir", 2, "Hossain", 3, "Minhaz"];
  // const student: Array<number | string> = [1, "Muzakkir", 2, "Hossain", 3, "Minhaz"];

  // but wen can generics this type by one type alias

  type GenericArray<T> = Array<T>;
  const studentID: GenericArray<number> = [1, 2, 3, 4, 5, 6];
  const studentName: GenericArray<string> = ["Muzakkir", "Hossain", "Minhaz"];
  const student: GenericArray<number | string> = [
    1,
    "Muzakkir",
    2,
    "Hossain",
    3,
    "Minhaz",
  ];

  // generic array of object
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Muzakkir",
      age: 24,
    },
    {
      name: "Minhaz",
      age: 25,
    },
  ];

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const studentInfo: GenericTuple<number, string> = [1, "Muzakkir"];

  // id then user details
  const userInfo: GenericTuple<
    number,
    { name: string; age: number; email: string }
  > = [
    10,
    {
      name: "Muzakkir",
      age: 24,
      email: "muzakkir@hossain",
    },
  ];
}
