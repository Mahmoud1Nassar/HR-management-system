document.addEventListener('DOMContentLoaded', () => {
    const employeeData = getData(); 
    const departmentStats = calculateDepartmentStats(employeeData);
    renderTable(departmentStats);
});

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

function calculateDepartmentStats(employees) {
    const stats = {};
    employees.forEach(employee => {
        if (!stats[employee.department]) {
            stats[employee.department] = { count: 0, totalSalary: 0 };
        }
        stats[employee.department].count++;
        stats[employee.department].totalSalary += employee.salary;
    });

    for (const dept in stats) {
        stats[dept].averageSalary = stats[dept].totalSalary / stats[dept].count;
    }
    return stats;
}

function renderTable(departmentStats) {
    const table = document.createElement('table');
    let html = `<thead>
                    <tr>
                        <th>Department</th>
                        <th># of Employees</th>
                        <th>Total Salary</th>
                        <th>Average Salary</th>
                    </tr>
                </thead>`;
    let totalEmployees = 0;
    let grandTotalSalary = 0;

    for (const [department, stats] of Object.entries(departmentStats)) {
        html += `<tr>
                    <td>${department}</td>
                    <td>${stats.count}</td>
                    <td>${stats.totalSalary}</td>
                    <td>${stats.averageSalary.toFixed(2)}</td>
                 </tr>`;
        totalEmployees += stats.count;
        grandTotalSalary += stats.totalSalary;
    }

    const averageSalaryAll = grandTotalSalary / totalEmployees;

    html += `<tfoot>
                <tr>
                    <th>Total</th>
                    <th>${totalEmployees}</th>
                    <th>${grandTotalSalary.toFixed(2)}</th>
                    <th>${averageSalaryAll.toFixed(2)}</th>
                </tr>
             </tfoot>`;

    table.innerHTML = html;
    document.getElementById('accountingTable').appendChild(table);
}
