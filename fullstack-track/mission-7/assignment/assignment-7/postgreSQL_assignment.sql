-- Active: 1754056463456@@127.0.0.1@5432@company_db
-- Create Database
CREATE DATABASE company_db;

-- Create Tables
CREATE TABLE departments (
    department_id SERIAL PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,
    employee_name VARCHAR(100),
    age INT,
    email VARCHAR(100) UNIQUE,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments (department_id),
    salary DECIMAL(10, 2) CHECK (salary >= 0),
    status VARCHAR(20)
);

-- Insert Sample Data
INSERT INTO departments (department_name) VALUES 
    ('Engineering'),
    ('Marketing'),
    ('Finance');

INSERT INTO employees (employee_name, age, email, department_id, salary, status) VALUES
    ('Alice', 30, 'alice@example.com', 1, 60000, NULL),
    ('Bob', 35, 'bob@example.net', 2, 65000, NULL),
    ('Charlie', 28, 'charlie@google.com', 1, 55000, NULL),
    ('David', 33, 'david@yahoo.com', 2, 62000, NULL),
    ('Eve', 31, 'eve@example.net', 3, 58000, NULL),
    ('Frank', 29, 'frank@example.com', 1, 59000, NULL),
    ('Grace', 34, 'grace@google.com', 2, 63000, NULL),
    ('Henry', 32, 'henry@yahoo.com', 3, 57000, NULL),
    ('Ivy', 27, 'ivy@gmail.com', 1, 56000, NULL),
    ('Jack', 36, 'jack@example.net', 2, 64000, NULL),
    ('Karen', 29, 'karen@gmail.com', 3, 60000, NULL),
    ('Liam', 33, 'liam@gmail.com', 1, 59000, NULL),
    ('Mia', 31, 'mia@yahoo.com', 2, 62000, NULL),
    ('Nora', 28, 'nora@yahoo.com', 3, 57000, NULL),
    ('Oliver', 35, 'oliver@example.net', 1, 61000, NULL),
    ('Penelope', 30, 'penelope@google.com', 2, 63000, NULL),
    ('Quinn', 32, 'quinn@google.com', 3, 59000, NULL),
    ('Rachel', 27, 'rachel@gmail.com', 1, 55000, NULL),
    ('Sam', 34, 'sam@example.net', 2, 64000, NULL),
    ('Taylor', 31, 'taylor@yahoo.com', 3, 58000, NULL);

-- Query 01:
-- Retrieve all employees with a salary greater than 60000

SELECT * FROM employees WHERE salary > 60000;
-- Here we are selecting all columns from the employees table where the salary is greater than 60000.

-- Query 02:
-- Retrieve the names of employees using a limit of 2, starting from the 3rd employee.

SELECT employee_name FROM employees LIMIT 2 OFFSET 2;
-- Here we are selecting the employee names from the employees table, limiting the results to 2 and skipping the first 2 records.

-- Query 03:
-- Calculate and display the average age of all employees.

SELECT AVG(age) AS average_age FROM employees;
-- Here we are calculating the average age of all employees and displaying it with the alias 'average_age'.

-- Query 04:
-- Retrieve the names of employees whose email addresses contain 'example.com', 'example.net', or 'google.com'.

SELECT employee_name
FROM employees
WHERE
    email LIKE '%example.com%'
    OR email LIKE '%example.net%'
    OR email LIKE '%google.com%';
-- Here we are selecting the employee names from the employees table where the email contains 'example.com', 'example.net', or 'google.com'.

-- Query 05:
-- Retrieve the names of all employees who belong to the department titled 'Engineering'.

SELECT employee_name
FROM employees
WHERE
    department_id = (
        SELECT department_id
        FROM departments
        WHERE
            department_name = 'Engineering'
    );
-- Here we are selecting the employee names from the employees table where the department_id matches the id of the 'Engineering' department.

-- Query 06:
-- Update the status of the employee with the highest salary to 'Promoted'

UPDATE employees
SET
    status = 'Promoted'
WHERE
    employee_id = (
        SELECT employee_id
        FROM employees
        ORDER BY salary DESC
        LIMIT 1
    );
-- Here we are updating the status of the employee with the highest salary to 'Promoted'.

-- Query 07:
-- Retrieve the department name and the average salary of employees in each department:

SELECT d.department_name, AVG(e.salary) AS average_salary
FROM departments d
    JOIN employees e ON d.department_id = e.department_id
GROUP BY
    d.department_name
ORDER BY d.department_name;
-- Here we are selecting the department name and the average salary of employees in each department, grouping by department name and ordering the results alphabetically.