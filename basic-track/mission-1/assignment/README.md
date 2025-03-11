# Answer for Interview Questions

## 1. What are some benefits of using TypeScript over JavaScript in a project?

> The benefits of using TypeScript over JavaScript are :
>
> - **TypeScript** provides static types for variables, function parameters, function return values so that user can define types.
> - As the types define, many errors/mistakes solve during the development period and reducing runtime errors.
> - As less error, we need less testing. So, increase developer productivity.
> - Improve code readability and make code is self documenting.
> - As **TypeScript** is the superset of JavaScript, it's support all JavaScript features even modules and namespaces.
> - Give some advance type which are not in the JavaScript such as - interface, tupple, union, intersection etc.

### 2. What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each

> \> **Optional Chaining (`?.`)** operator allows to access properties or call methods on an object with implicitly checking the property or method exists or not and returns `undefined` instead of throwing error if not exist.
>
> ```ts
> const user: { name: string; email: string } = {
>   name: "John Doe",
>   email: "john@gmail.com",
> };
>
> const age = user.age; // show an error
>
> const age = user?.age; // no error
> console.log(age); // undefined
> ```
>
> \> **Nullish Coalescing (`??`)** operator dealing with `null` or `undefined` and provide a default value. It returns **_right-side_** operand when the **_left-side_** operand is `null` or `undefined` otherwise returns the **_left-side_** operand.
>
> ```typescript
> const name = null; // undefined
>
> const username = name ?? "Guest";
> console.log(username); // Guest
> ```

### 3. How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?

> To handle asynchronous operation firstly we need to declare a function as asynchronous using `async` function. Then use the `await` keyword before the **Promise** return expression. This `await` allows the asynchronous code to pause and wait untill resolve the Promise before continuing. Example: (using `try-catch` for error handling)
>
> ```ts
> async function fetchData(): Promise<Data> {
>   try {
>     const result = await fetchApi();
>     return result;
>   } catch (error: any) {
>     console.error("Error: ", error.message);
>   }
> }
> ```
>
> **Advantages of `async/await` over callbacks or Promises :**
>
> - `async/await` makes code more readable and easier to understand by eleminating nested callbacks (callback hell) problem.
> - Error handling is more easier with `async/await` using `try/catch` blocks.
> - `async/await` also makes sequential-like code which is more natural and esier to follow the flow of execution.
> - As `async/await` allow to use regular debugging techniques like as - breakpoints, console.log statements, more effectively so the debugging process is more easier.

### 4. How can you use TypeScript's enums, and what are their advantages?

> **`enums`** are used to define a set of named constants in TypeScript, so that making the code more readable and maintainable. Example :
>
> ```ts
> enum number {
>   one,
>   two,
>   three,
> }
>
> console.log(number.one); // output: 0
> ```
>
> **Advantages of `enums` :**
>
> - Improving code clarity
> - Reducing the risk of using incorrect values
> - Enhanching code documentation
> - Enable better autocompletion and type checking in the development process

### 5. Explain the role of type guards in TypeScript and provide an example of a custom type guard

> **Type Guard** provides more specific type information and narrowing down the type of a variable within a conditional block. It enhance the type system's understanding and enable more precise code analysis.
>
> **Custom Type Guard** means a user-defined function which return type is a type predicate. The type predicate means a boolean returning expression that helps to understand the type of a variable within a certail context in TypeScript. Example :
>
> ```ts
> // custom type guard function
> function isAdmin(user: object): user is { role: string } {
>   return "role" in user;
> }
>
> const normalUser = { name: "John", age: 12 };
> const adminUser = { name: "Jane", role: "admin" };
>
> function output(user: object): void {
>   if (isAdmin(user)) {
>     console.log("This is ADMIN user");
>   } else {
>     cosole.log("This is NORMAL user");
>   }
> }
>
> output(normalUser); // This is NORMAL user
> output(adminUser); // This is ADMIN user
> ```

### 6. Can you give an example of how to use "readonly" properties in TypeScript?

> The **`readonly`** keyword is used make a property immutable or unchangeable. If once initially set a value to a property then never change the value again. Example :
>
> ```ts
> // define interface with readonly
> interface Person {
>   readonly name: string;
>   age: number;
> }
>
> // object with above interface
> const person: Person = {
>   name: "John",
>   age: 20,
> };
>
> // now when try to change readonly value it shows an error
> person.name = "Jane";
> ```
>
> Also TypeScript provides readonly `array` and for and array after initialization never can change anything in the array like `push` operation.

### 7. Explain what a union type is in TypeScript and provide an example of its usage

> The **`union`** type in TypeScript allows a variable to set one of multiple specified types. It gives flexibility when variable can hold multi-types of value and uses when dealing with a variable or parameter can have different types of values. It denoted by the pipe ("`|`") symbol and use this symbol between the type options. Example :
>
> ```ts
> const print = (param: number | string): void => {
>   console.log(param);
> };
>
> print(10); // 10
> print("Hello"); // Hello
> ```
