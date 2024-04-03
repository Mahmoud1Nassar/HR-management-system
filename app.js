class Employee {
    constructor(employeeID, fullName, department, level, imageUrl) {
        this.employeeID = employeeID;
        this.fullName = fullName;
        this.department = department;
        this.level = level;
        this.imageUrl = imageUrl;
        this.salary = calculateSalary(level);
        this.netSalary = calculateNetSalary(this.salary);
    }
         render() {
        //Making Departments
        const administration = document.getElementById("Administration");
        const finance = document.getElementById("Finance");
        const marketing = document.getElementById("Marketing");
        const development = document.getElementById("Development");
        //Making Divs for each employee
        const employeeDiv = document.createElement("div");
        employeeDiv.classList.add("employee");
        employeeDiv.innerHTML = `
        <h2>${this.fullName}</h2>
        <img src="${this.imageUrl}" alt="${this.fullName}">
        <p>ID: ${this.employeeID}</p>
        <p>Department: ${this.department}</p>
        <p>Level: ${this.level}</p>
        <p>Net-Salary: ${this.netSalary.toFixed(2)}</p>`;
        //rendering dives inside the situational department
        if (this.department == 'Administration') {
            administration.appendChild(employeeDiv);
        }
        else if (this.department == 'Finance') {
            finance.appendChild(employeeDiv);
        }
        else if (this.department == 'Marketing') {
            marketing.appendChild(employeeDiv);
        }
        else if (this.department == 'Development') {
            development.appendChild(employeeDiv);
        }
    }
}
let click = 0;
function saveData(employee) {
    click++;
    localStorage.setItem('employee_' + click, JSON.stringify(employee));
}

function getData() {
    const employees = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('employee_')) {
            const employeeData = JSON.parse(localStorage.getItem(key));
            employees.push(employeeData);
        }
    }
    return employees;
}

function calculateSalary(level) {
    switch (level) {
        case "Senior": return Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
        case "Mid-Senior": return Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
        case "Junior": return Math.floor(Math.random() * (1000 - 500 + 1)) + 1000;
        default: return 0;
    }
}

function generateID() {
    let random = Math.floor(Math.random() * (9999 - 1007) + 1007);
    return random;
}

function calculateNetSalary(salary) {
    const taxPercent = 7.5;
    const netSalary = salary - (salary * (taxPercent / 100));
    return netSalary;
}
const employees = [
    { employeeID: 1000, fullName: "Ghazi Samer", department: "Administration", level: "Senior", imageUrl: "Images/Ghazi Samer.jpg" },
    { employeeID: 1001, fullName: "Lana Ali", department: "Finance", level: "Senior", imageUrl: "Images/Lana Ali.jpg" },
    { employeeID: 1002, fullName: "Tamara Ayoub", department: "Marketing", level: "Senior", imageUrl: "Images/Tamara Ayoub.jpg" },
    { employeeID: 1003, fullName: "Safi Walid", department: "Administration", level: "Mid-Senior", imageUrl: "Images/Safi Walid.jpg" },
    { employeeID: 1004, fullName: "Omar Zaid", department: "Development", level: "Senior", imageUrl: "Images/Omar Zaid.jpg" },
    { employeeID: 1005, fullName: "Rana Saleh", department: "Development", level: "Junior", imageUrl: "Images/Rana Saleh.jpg" },
    { employeeID: 1006, fullName: "Hadi Ahmad", department: "Finance", level: "Mid-Senior", imageUrl: "Images/Hadi Ahmad.jpg" }
]

employees.forEach(employeeData => {
    const employee = new Employee(employeeData.employeeID, employeeData.fullName, employeeData.department, employeeData.level, employeeData.imageUrl);
    saveData(employee);
});

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('createEmployeeForm').classList.add('hidden');

    document.getElementById('toggleFormButton').addEventListener('click', function () {
        const form = document.getElementById('createEmployeeForm');
        form.classList.toggle('hidden');
    });

    document.getElementById('createEmployeeForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const department = document.getElementById('department').value;
        const level = document.getElementById('level').value;
        const imageUrl = document.getElementById('imageUrl').value
        let emp = new Employee(generateID(), fullName, department, level, imageUrl);
        saveData(emp);
        emp.render();
    })
});

const storedEmployees = getData();
storedEmployees.forEach(employeeData => {
    const employee = new Employee(employeeData.employeeID, employeeData.fullName, employeeData.department, employeeData.level, employeeData.imageUrl);
    employee.render();
});
