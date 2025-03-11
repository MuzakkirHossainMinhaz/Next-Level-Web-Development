// reference type --> object

const user: {
  firstName: string;
  middleName?: string; // optional property
  lastName: string;
  age: number;
  readonly isMarried: boolean; // read only property --> literal
  nationality: "Bangladeshi"; // literal
} = {
  firstName: "Muzakkir",
  lastName: "Minhaz",
  age: 24,
  isMarried: true,
  nationality: "Bangladeshi",
};
