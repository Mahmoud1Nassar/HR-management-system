function Employee(employeeID, fullName, department, level, imageUrl) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = calculateSalary(level);
    this.netSalary = calculateNetSalary(this.salary);
}

function calculateSalary(level) {
    switch (level) {
        case "Senior": return Math.floor(Math.random() * (2000 - 1500 + 1 )) + 1500;
        case "Mid-Senior": return Math.floor(Math.random() * (1500 - 1000 + 1 )) + 1000; 
        case "Junior": return Math.floor(Math.random() * (1000 - 500 + 1 )) + 1000;
        default: return 0;
    }
}

function calculateNetSalary(salary){
    const taxPercent = 7.5;
    const netSalary = salary - (salary * (taxPercent / 100));
    return netSalary;
}

                                                                                                
const employees = [
    {employeeID:1000 ,fullName:"Ghazi Samer" ,department:"Administration" ,level:"Senior" ,imageUrl:"Images/Ghazi Samer.jpg" },
    {employeeID:1001 ,fullName:"Lana Ali" ,department:"Finance" ,level:"Senior" ,imageUrl:"Images/Lana Ali.jpg" },
    {employeeID:1002 ,fullName:"Tamara Ayoub" ,department:"Marketing" ,level:"Senior" ,imageUrl:"Images/Tamara Ayoub.jpg" },
    {employeeID:1003 ,fullName:"Safi Walid" ,department:"Administration" ,level:"Mid-Senior" ,imageUrl:"Images/Safi Walid.jpg" },
    {employeeID:1004 ,fullName:"Omar Zaid" ,department:"Development" ,level:"Senior" ,imageUrl:"Images/Omar Zaid.jpg" },
    {employeeID:1005 ,fullName:"Rana Saleh" ,department:"Development" ,level:"Junior" ,imageUrl:"Images/Rana Saleh.jpg" },
    {employeeID:1006 ,fullName:"Hadi Ahmad" ,department:"Finance" ,level:"Mid-Senior" ,imageUrl:"Images/Hadi Ahmad.jpg" }
]

Employee.prototype.render = function() {
    const employeeList = document.getElementById("employeeList");
    const employeeDiv = document.createElement("div");
    employeeDiv.classList.add("employee");
    employeeDiv.innerHTML = `
        <h2>${this.fullName}</h2>
        <img src="${this.imageUrl}" alt="${this.fullName}">
        <p>Department: ${this.department}</p>
        <p>Level: ${this.level}</p>
        <p>Salary: ${this.salary}</p>
        <p>Net Salary: ${this.netSalary.toFixed(2)}</p>`;
    employeeList.appendChild(employeeDiv);
};



employees.forEach(employeeData => {
    const employee = new Employee(employeeData.employeeID, employeeData.fullName, employeeData.department, employeeData.level, employeeData.imageUrl);
    employee.render();
});