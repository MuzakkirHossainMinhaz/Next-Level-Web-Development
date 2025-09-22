# PostgreSQL Questions and Answers (Assignment 07)

## 1. What is PostgreSQL?

PostgreSQL is a powerful, open-source object-relational database management system (ORDBMS) that emphasizes extensibility and SQL compliance. It's known for its reliability, robustness, and advanced features like complex queries, foreign keys, triggers, updatable views, and transactional integrity.

## 2. What is the purpose of a database schema in PostgreSQL?

A schema in PostgreSQL is a named collection of tables, views, functions, and other database objects. Its purposes include:

- Organizing database objects into logical groups
- Allowing multiple users to use one database without interfering with each other
- Managing third-party applications in separate schemas
- Providing a way to control access at the schema level

## 3. Explain the primary key and foreign key concepts

- **Primary Key**: A column or set of columns that uniquely identifies each row in a table. It must contain unique values and cannot contain NULLs.
- **Foreign Key**: A column or set of columns that references the primary key of another table, establishing a relationship between tables. It enforces referential integrity.

## 4. What is the difference between the VARCHAR and CHAR data types?

- **VARCHAR(n)**: Variable-length character string with a maximum length of n. Only uses as much space as needed.
- **CHAR(n)**: Fixed-length character string that always uses n characters of space, padding with spaces if necessary.

## 5. Explain the purpose of the WHERE clause in a SELECT statement

The WHERE clause filters records to include only those that meet specified conditions. It comes after the FROM clause and before GROUP BY, HAVING, or ORDER BY clauses.

## 6. What are the LIMIT and OFFSET clauses used for?

- **LIMIT**: Restricts the number of rows returned by a query
- **OFFSET**: Skips a specified number of rows before beginning to return rows
Example: `SELECT * FROM users LIMIT 10 OFFSET 20` returns rows 21-30

## 7. How can you perform data modification using UPDATE statements?

The UPDATE statement modifies existing records:

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

Example:

```sql
UPDATE employees
SET salary = salary * 1.05
WHERE department = 'Engineering';
```

## 8. What is the significance of the JOIN operation, and how does it work in PostgreSQL?

JOIN combines rows from two or more tables based on related columns. Types in PostgreSQL:

- **INNER JOIN**: Returns rows when there's a match in both tables
- **LEFT JOIN**: Returns all rows from the left table with matching right table rows
- **RIGHT JOIN**: Returns all rows from the right table with matching left table rows
- **FULL JOIN**: Returns rows when there's a match in either table
- **CROSS JOIN**: Returns the Cartesian product of tables

## 9. Explain the GROUP BY clause and its role in aggregation operations

GROUP BY groups rows sharing a property so aggregate functions can be applied to each group. Example:

```sql
SELECT department, COUNT(*), AVG(salary)
FROM employees
GROUP BY department;
```

## 10. How can you calculate aggregate functions like COUNT, SUM, and AVG in PostgreSQL?

Common aggregate functions:

- `COUNT()`: Counts rows
- `SUM()`: Sums values
- `AVG()`: Calculates average
- `MAX()`/`MIN()`: Finds maximum/minimum values

Example:

```sql
SELECT COUNT(*) AS total_employees, 
       AVG(salary) AS avg_salary,
       MAX(salary) AS max_salary
FROM employees;
```

## 11. What is the purpose of an index in PostgreSQL, and how does it optimize query performance?

An index is a performance-tuning feature that speeds up data retrieval. It:

- Creates a separate data structure that allows faster lookups
- Is automatically created for primary keys and unique constraints
- Can be created on one or multiple columns
- Improves SELECT performance but may slow down INSERT/UPDATE/DELETE operations

## 12. Explain the concept of a PostgreSQL view and how it differs from a table

A view is:

- A virtual table based on the result set of a SQL query
- Not physically stored (unlike tables) but behaves like a table
- Used to simplify complex queries, restrict access to data, or present data in a specific way

Key differences from tables:

- Views don't store data (materialized views are an exception)
- Views are dynamically generated when accessed
- Views can be updatable if they meet certain conditions
