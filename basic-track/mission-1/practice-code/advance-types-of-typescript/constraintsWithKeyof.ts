{
  // generic constraints using keyof operator

  type Vehicle = {
    bicycle: string;
    bike: string;
    car: string;
  };

  type vehicle1 = "bicycle" | "bike" | "car"; // manually

  type vehicle2 = keyof Vehicle; // automatically by keyof operator

  const person: vehicle2 = "bicycle";

  // another example

  const getPropertyValue = <T, K extends keyof T>(obj: T, key: K) => obj[key];

  const man = {
    name: "Muzakkir",
    age: 24,
    email: "minhaz@gmail.com",
  };

  const name = getPropertyValue(man, "name");

  const car = {
    model: "BMW",
    year: 2020,
    color: "black",
  };

  const model = getPropertyValue(car, "model");
}
