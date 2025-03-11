{
  // union (|) types

  type FrontendDeveloper = "Poor Developer" | "Good Developer";
  type FullStackDeveloper = "Medium Developer" | "Excellent Developer";

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const developer: Developer = "Excellent Developer";

  type User = {
    name: string;
    email?: string;
    age: number;
    gender: "Male" | "Female";
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  };

  const user: User = {
    name: "Minhaz",
    age: 24,
    gender: "Male",
    bloodGroup: "A+",
  };
}
