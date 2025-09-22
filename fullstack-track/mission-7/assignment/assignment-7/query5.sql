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