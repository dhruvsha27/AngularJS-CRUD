angular.module('app').controller('appController', function ($scope, appService) {

    $scope.employees = [];
    $scope.employee = {};

    $scope.getList = function () {
        appService.getEmployeesList().success(function (response) {
            if (response && response.status == 'success') {
                $scope.employees = response.data;
            }
            else
                alert("Unable to fetch data");
        });
    };

    $scope.create = function (employee) {
        var newEmp = {
            name: employee.employee_name,
            age: employee.employee_age,
            salary: employee.employee_salary
        }
        appService.createEmployee(newEmp).success(function (response) {
            if (response && response.status === 'success') {
                $scope.employees.unshift({
                    id : response.data.id,
                    employee_name : response.data.name,
                    employee_age : response.data.age,
                    employee_salary : response.data.salary
                });
                $scope.employee = {};
                alert("Employee created successfully");
            }
            else
                alert("Error in creating employee");
        });
    };

    $scope.delete = function (employee) {
        appService.deleteEmployee(employee).success(function (response) {
            angular.forEach($scope.employees, function(value, key) {
                if(value.id == employee.id) {
                    $scope.employees.splice(key, 1);
                }
              });
        });
    };

    $scope.edit = function (employeeDetailsFromList) {
        $scope.employee = employeeDetailsFromList;
    };

    $scope.update = function () { };

});