{
  // example
  const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];

  // const arrayOfStrings: string[] = ["1", "2", "3", "4", "5"];
  const arrayOfStrings: Array<string> = arrayOfNumbers.map((num) =>
    num.toString()
  );

  console.log(arrayOfStrings);

  // mapped type
  type AreaNumber = {
    width: number;
    height: number;
  };

  // looking or look up type
  type Height = AreaNumber["height"]; // type Height = number

  // type AreaString = {
  //     width: string;
  //     height: string;
  // };

  // using mapped type
  type AreaString<T> = {
    [key in keyof T]: T[key]; // keyof AreaNumber = "width" | "height"
  };

  const area: AreaString<{ width: string; height: number }> = {
    width: "100",
    height: 200,
  };
}
