{
  // conditional type
  type A = string;
  type B = number;

  type x = A extends string ? string : number;
  type y = B extends number ? number : string;

  type z = x extends y ? number : x extends string ? string : any;

  type RichMan = {
    bike: string;
    car: string;
    ship: string;
  };

  type CheckVehicle<T> = T extends keyof RichMan ? true : false;

  type HasTractor = CheckVehicle<"Tractor">; // false
}
