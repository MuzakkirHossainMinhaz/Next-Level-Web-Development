function problem1(param: string | number): number {
    if (typeof param === "string") {
        return param.length;
    } else {
        return param ** 2;
    }
}

interface PersonInterface {
    name: string;
    age: number;
    phone?: string;
    address?: {
        city: string;
        street: string;
    };
}

function getAddressCity(person: PersonInterface): string | undefined {
    return person.address?.city;
}

class Cat {
    constructor(public name: string, public age: number) {}
}

const isCat = (animal: Cat | any): animal is Cat => {
    return animal instanceof Cat;
};

const cat = new Cat("Tom", 3);
if (isCat(cat)) {
    console.log("yes, it's a cat.");
} else {
    console.log("no, it's not a cat.");
}

const mixedData: (string | number)[] = [1, "two", 5, 3, "four", 5];
function problem4(list: (number | string)[]): number {
    let sum = 0;
    list.forEach((item: number | string) => {
        if (typeof item === "number") {
            sum += item;
        }
    });
    return sum;
}

interface Car {
    make: string;
    model: string;
    year: number;
}

interface Driver {
    name: string;
    licenseNumber: number;
}

function problem5(object1: Car, object2: Driver): object {
    return { ...object1, ...object2 };
}

const car: Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
};

const driver: Driver = {
    name: "John Doe",
    licenseNumber: 123456,
};

const carAndDriver = problem5(car, driver);

function problem6(param: unknown): void {
    if (Array.isArray(param)) {
        const isNumberArray = param.every((item) => typeof item === "number");

        if (isNumberArray && param.length > 0) {
            const sum = param.reduce((acc, item): number => acc + item, 0);
            console.log(sum);
        } else {
            console.log("Error: Not a number array.");
        }
    } else {
        console.log("Error: Not an array.");
    }
}

const findFirstOccurrence = <T>(arr: T[], value: T): number => {
    return arr.indexOf(value);
};

const numbers: number[] = [1, 2, 3, 4, 5, 2];
const findNumber: number = 2;
const numberIndex = findFirstOccurrence(numbers, findNumber);
console.log(numberIndex);

const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];
const findString: string = "orange";
const stringIndex = findFirstOccurrence(strings, findString);
console.log(stringIndex);

interface Product {
    name: string;
    price: number;
    quantity: number;
}

const products: Product[] = [
    { name: "Pen", price: 10, quantity: 12 },
    { name: "Banana", price: 7, quantity: 4 },
    { name: "Chair", price: 3500, quantity: 1 },
    { name: "Pencil", price: 15, quantity: 12 },
];

function problem8(products: Product[]): number {
    let totalCost: number = 0;
    products.forEach((product: Product) => {
        totalCost += product.price * product.quantity;
    });
    return totalCost;
}
