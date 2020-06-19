app.factory('appService',['$http',function($http) {
    return {
        getEmployeesList : function() {
            return $http.get('http://dummy.restapiexample.com/api/v1/employees');
        },
        createEmployee : function(employeeDetails) {
            return $http.post('http://dummy.restapiexample.com/api/v1/create', employeeDetails);
        },
        deleteEmployee : function(employeeDetails) {
            return $http.delete('http://dummy.restapiexample.com/api/v1/delete/'+employeeDetails.id);
        },
        updateEmployee : function(id, employeeDetails) {
            return $http.put('http://dummy.restapiexample.com/api/v1/update/'+id, employeeDetails);
        }
    }
}]);