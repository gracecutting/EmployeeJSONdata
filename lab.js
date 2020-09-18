var employeePromise = d3.json("employee.json");

console.log(employeePromise)

var successFcn = function(employees)
{
    console.log("Data Collected",employees);
}

var failFcn = function(errormsg)
{
    console.log("No data to show", errormsg);
}

employeePromise.then(successFcn, failFcn);