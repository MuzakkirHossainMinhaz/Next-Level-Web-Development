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