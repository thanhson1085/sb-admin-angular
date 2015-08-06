'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('SampleCtrl', function($scope,$position, Sample) {
      Sample.get().then(function(data){
          $scope.users = data
      })
  });
