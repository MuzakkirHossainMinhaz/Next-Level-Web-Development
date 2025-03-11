{
  /**
   * Ternary operator
   * - condition ? value1 : value2
   *
   * Optional chaining
   * - ?. || ?:
   *
   * Nullish coalescing
   * - ??
   * - when we want to give default value if the value is null or undefined
   */

  // ternary operator
  const marks: number = 60;
  const result = marks > 50 ? "pass" : "fail";

  // nullish coalescing
  const isAuthenticated = null; // or undefined
  const role = isAuthenticated ?? "Guest";

  // optional chaining
  const user: {
    name: String;
    age: number;
    address: {
      city: string;
      road?: string; // optional chaining
      presentAddress: string;
      permanentAddress?: string; // optional chaining
    };
  } = {
    name: "Muzakkir Hossain",
    age: 24,
    address: {
      city: "Dhaka",
      presentAddress: "Dhaka",
    },
  };

  // also optional chaining + nullish coalescing
  const permanentAddress = user.address?.permanentAddress ?? "Not Available";
  console.log(permanentAddress);
}
