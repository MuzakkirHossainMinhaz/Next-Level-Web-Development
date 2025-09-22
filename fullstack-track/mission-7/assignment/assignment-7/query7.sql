-- Retrieve the department name and the average salary of employees in each department:

SELECT d.department_name, AVG(e.salary) AS average_salary
FROM departments d
    JOIN employees e ON d.department_id = e.department_id
GROUP BY
    d.department_name
ORDER BY d.department_name;