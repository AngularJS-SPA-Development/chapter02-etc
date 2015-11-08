(function() {
    'use strict';

    angular
        .module('App')
        .controller('TodoCtrl', function TodCtrl($scope) {
            $scope.name = 'Peter Yun';
            $scope.reverseName = function() {
                $scope.name = $scope.name.split('').reverse().join('');
            }
        })
        .directive('myDirective', function() {
            return {
                restrict: 'EA',
                scope: {
                    name: '@pName'
                },
                template: '<div>Name is : {{name}}</div>' +
                        'Change Name : <input type="text" ng-model="name" />',
                link: function(scope, iElement, iAttrs) {

                    iAttrs.$observe('pName', function(name) {
                        console.log('--->', name);
                    });

                    scope.$watch('name', function(newValue, oldValue) {
                        console.log('===>', newValue, '--', oldValue);
                    });

                    scope.$watch(iAttrs.pName, function(newValue, oldValue) {
                        console.log('++++>', newValue, '--', oldValue);
                    });
                }
            }
        });
})();
