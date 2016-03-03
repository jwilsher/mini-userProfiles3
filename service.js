var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

  this.getUsers = function() {
    //var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response){
        //deferred.resolve(response.data.data);
        return response.data.data;
    })
    //return deferred.promise;
  }

});
