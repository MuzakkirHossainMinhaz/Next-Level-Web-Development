-- Retrieve the names of employees whose email addresses contain 'example.com', 'example.net', or 'google.com'.

SELECT employee_name
FROM employees
WHERE
    email LIKE '%example.com%'
    OR email LIKE '%example.net%'
    OR email LIKE '%google.com%';