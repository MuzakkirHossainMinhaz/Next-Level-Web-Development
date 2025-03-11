{
  // type assertion or type narrowing in ts

  let userName: any;
  userName = "MuzakkirMinhaz";
  userName = 100;

  // type assertion
  let userName2 = userName as string;
  userName2 = "minhaz_cse";
  // userName2 = 12; // give error

  // type assertion
  let userName3 = <string>userName;
  userName3 = "minhaz_cse";
  // userName3 = 12; // give error

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      value = parseFloat(value) * 1000;
      return `${value} gram`;
    } else if (typeof value === "number") {
      value = value * 1000;
      return value;
    }
  };

  const result1 = kgToGram("10") as string; // "10000 gram" as string
  const result2 = kgToGram(10) as number; // 10000 as number

  // type assertion in try-catch

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
