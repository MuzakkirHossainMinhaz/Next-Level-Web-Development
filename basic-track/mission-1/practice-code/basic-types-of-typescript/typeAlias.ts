{
  // type alias for object
  type Student = {
    name: string;
    age: number;
    roll: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Muzakkir Hossain Minhaz",
    age: 24,
    roll: 10,
    gender: "Male",
    contactNo: "01700000000",
    address: "Dhaka, Bangladesh",
  };

  const student2: Student = {
    name: "Md. Tarikul Islam",
    age: 24,
    roll: 7,
    gender: "Male",
    address: "Dhaka, Bangladesh",
  };

  // type alias for string and boolean
  type String = string;
  type IsVerified = boolean;
  let userName: String = "Muzakkir Hossain Minhaz";
  let isVerified: IsVerified = true;

  // type alias for function
  type Add = (x: number, y: number) => number;

  const addNumbers: Add = (num1, num2) => num1 + num2;
}
