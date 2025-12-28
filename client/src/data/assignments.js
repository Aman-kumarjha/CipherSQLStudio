const assignments = [
  {
    id: 1,
    title: "Employees with High Salary",
    difficulty: "Easy",
    topic: "WHERE",
    question: "Find all employees who earn more than 50,000.",
    requirements: [
      "Use WHERE clause",
      "Return employee name and salary only"
    ],
    tableName: "employees",
    schema: "employees(id INT, name TEXT, salary INT, department TEXT)",
    hint: "Filter rows using a WHERE condition on salary."
  },
  {
    id: 2,
    title: "Employees in IT Department",
    difficulty: "Easy",
    topic: "WHERE",
    question: "Find all employees who work in the IT department.",
    requirements: [
      "Use WHERE clause",
      "Filter by department name"
    ],
    tableName: "employees",
    schema: "employees(id INT, name TEXT, salary INT, department TEXT)",
    hint: "Compare the department column with a string value."
  },
  {
    id: 3,
    title: "Highest Paid Employee",
    difficulty: "Easy",
    topic: "ORDER BY",
    question: "Find the employee who earns the highest salary.",
    requirements: [
      "Use ORDER BY",
      "Limit the result to one row"
    ],
    tableName: "employees",
    schema: "employees(id INT, name TEXT, salary INT, department TEXT)",
    hint: "Sort salary in descending order and limit the output."
  },
  {
    id: 4,
    title: "Average Salary by Department",
    difficulty: "Medium",
    topic: "GROUP BY",
    question: "Calculate the average salary for each department.",
    requirements: [
      "Use GROUP BY",
      "Use AVG aggregate function"
    ],
    tableName: "employees",
    schema: "employees(id INT, name TEXT, salary INT, department TEXT)",
    hint: "Group rows by department and apply AVG on salary."
  },
  {
    id: 5,
    title: "Employee Count per Department",
    difficulty: "Medium",
    topic: "GROUP BY",
    question: "Find the total number of employees in each department.",
    requirements: [
      "Use COUNT",
      "Group results by department"
    ],
    tableName: "employees",
    schema: "employees(id INT, name TEXT, salary INT, department TEXT)",
    hint: "COUNT rows for each department using GROUP BY."
  },
  {
    id: 6,
    title: "Departments with High Average Salary",
    difficulty: "Medium",
    topic: "HAVING",
    question: "Find departments where the average salary is greater than 60,000.",
    requirements: [
      "Use GROUP BY",
      "Filter groups using HAVING"
    ],
    tableName: "employees",
    schema: "employees(id INT, name TEXT, salary INT, department TEXT)",
    hint: "Use HAVING to filter aggregated results."
  }
];

export default assignments;
