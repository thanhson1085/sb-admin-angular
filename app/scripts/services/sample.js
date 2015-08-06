angular.module('sbAdminApp').factory('Sample', function($http, $q) {
    return {
        get: function(){
            var deferred = $q.defer();
            $http.get('scripts/services/sample.json').success(function(data) {
                deferred.resolve(data)
            }).error(deferred.reject);
            return deferred.promise;
        }
    }
});
