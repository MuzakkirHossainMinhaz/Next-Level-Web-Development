{
  // utility types in ts

  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    phone: string;
  };

  type NamePhone = Pick<Person, "name" | "phone">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type RequiredPerson = Required<Person>;

  // Partial
  type PartialPerson = Partial<Person>;

  // Readonly
  type ReadonlyPerson = Readonly<Person>;

  // Record
  // type User = {
  //     name: string;
  //     id: number;
  // };

  type User = Record<string, unknown>;

  const user: User = {
    name: "Muzakkir",
    id: 123456789,
    email: "nVwzj@example.com",
    phone: "01711111111",
  };
}
