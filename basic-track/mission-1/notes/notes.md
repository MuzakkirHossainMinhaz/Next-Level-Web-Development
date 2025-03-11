# TypeScript and OOP Fundamentals 📘

## TypeScript Fundamentals

### What is TypeScript?

- A superset of JavaScript with additional features
- Object-Oriented Programming Language built on top of JavaScript
- Provides optional static typing and enhanced features for large-scale applications
- Code is transpiled into JavaScript for runtime execution

### Why TypeScript? 🤔

JavaScript's limitations that TypeScript addresses:

- Dynamic typing issues
- Large codebase management difficulties
- Lack of compile-time type checking
- Limited OOP support
- IDE tooling limitations

### Benefits of TypeScript ✨

- Older browser support
- Type safety
- Enhanced productivity
- Reduced bugs and testing needs
- Rich tooling support
- Easier codebase management

### JavaScript vs TypeScript Comparison

| JavaScript                  | TypeScript                       |
| --------------------------- | -------------------------------- |
| Dynamically typed           | Static typed                     |
| Interpreted                 | Compiled                         |
| Limited tooling             | Rich tooling support             |
| Complex for large codebases | Easier large codebase management |

### TypeScript Types 🏷️

1. **JavaScript Types Support**

   - Number
   - String
   - Boolean
   - Null
   - Undefined
   - Object
   - Symbol

2. **TypeScript-Specific Types**
   - Interface
   - Void
   - Array
   - Tuple
   - Enum
   - Union
   - Intersection

### TypeScript Challenges

- Type complexity
- Limited library support
- Potential over-engineering
- Migration difficulties

### Installation Guide 🔧

1. **NVM Setup**

   - Verify installation: `nvm -v`

2. **TypeScript Setup**
   - Global installation: `npm install -g typescript`
   - Verify installation: `tsc -v`

### TypeScript Advanced Concepts 🔄

#### Operators and Special Syntax

1. **Ternary Operator**

   - Syntax: `condition ? value1 : value2`

2. **Optional Chaining**

   - Uses `?.` or `?:`
   - Safely access nested properties

3. **Nullish Coalescing**
   - Uses `??`
   - Provides default values for null/undefined

#### Interface vs Type Alias

- **Type Alias**

  - Best for primitive types
  - Clean and readable for arrays
  - Preferred for function definitions

- **Interface**
  - Ideal for objects
  - More flexible
  - Can be extended
  - Better for object-oriented design

Usage Guidelines:

- Use type alias for primitives, arrays, and functions
- Use interface for objects and extendable structures
- Prioritize code readability and maintainability

## Object-Oriented Programming (OOP)

### Programming Paradigms Overview

#### What is a Programming Paradigm?

- The style and approach used to organize and write code

#### Types of Programming Paradigms

1. **Procedural Programming**

   - Organized set of structured procedures
   - Sequential execution of instructions
   - Limited flexibility and reusability

2. **Functional Programming**

   - Based on mathematical functions
   - Focuses on code clarity and bug reduction
   - Emphasizes immutability

3. **Declarative Programming**

   - Describes desired outcomes
   - System determines implementation
   - Focus on "what" rather than "how"

4. **Object-Oriented Programming**

   - Organizes code around objects
   - Models real-world entities
   - Combines data and behavior

5. **Event-Driven Programming**
   - Responds to events/signals
   - Reactive programming model
   - User interaction focused

### Access Modifiers in TypeScript 🔐

1. **Public**

   - Accessible from anywhere

2. **Private**

   - Accessible only within the class
   - Cannot be accessed from outside

3. **Protected**

   - Accessible within the class
   - Accessible in child classes
   - Not accessible from outside

4. **Readonly**

   - Cannot be reassigned
   - Accessible within class
   - Limited external access

5. **Static**

   - Class-level members
   - Cannot be accessed from instances
   - Cannot be reassigned

6. **Abstract**
   - Cannot be accessed from outside
   - Cannot be accessed from child classes
   - Cannot be reassigned

### OOP Building Blocks 🏗️

1. Inheritance
2. Polymorphism
3. Abstraction
4. Encapsulation

#### Abstraction

- Can be implemented through:
  - Interfaces
  - Abstract classes

#### Encapsulation

- Hide implementation details
- Protect state
- Control behavior
- Secure data

#### Inheritance

- Reuse code
- Extend functionality
- Maintain hierarchy

#### Polymorphism

- Implement different behaviors
- Override methods
- Use polymorphic types

---

## Assignment Information 📝

For detailed assignment requirements and specifications, please visit:
[Assignment Repository](https://github.com/Apollo-Level2-Web-Dev/L2-B2-Assignment-01)

This repository contains:

- Assignment requirements
- Submission guidelines
- Evaluation criteria

**Note**: Make sure to follow the submission instructions carefully.

---
