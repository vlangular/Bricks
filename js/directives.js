// Directives
appBricks.directive('angryBlock', function() {
    return {
        link: function(scope, element, attrs) {
            element.on('mouseover', function() {
                element.removeClass(attrs.calmBlock);
                element.addClass(attrs.angryBlock);
            });
        }
    }
});
appBricks.directive('calmBlock', function() {
    return {
        link: function(scope, element, attrs) {
            element.on('mouseleave', function(e) {
                element.removeClass(attrs.angryBlock);
                element.addClass(attrs.calmBlock);
            })
        }
    }
});

appBricks.directive('barItem', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/bar-item.html',
        replace: true,
        scope: {
            // barValue: '@',
            barPerson: '=',
            barCheckValue: '&'
        },
        transclude: true
    }
});

appBricks.directive('jumElement', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/jum-element.html',
        replace: true,
        controller: function($scope) {
            $scope.calcSecondCol = function(firstCol) {
                return 12 - Number(firstCol);
            };
        },
        scope: {
            contactDesc: '=',
            contactList: '=',
            firstCol: '@'
        }
    }
});

appBricks.directive('jumModule1', function() {
    return {
        require: 'jumElement',
        restrict: 'E',
        templateUrl: 'directives/jum-module1.html',
        replace: true,
        scope: {
            contactDesc: '=',
            firstCol: '='
        }
    }
});

appBricks.directive('jumModule2', function() {
    return {
        require: 'jumElement',
        restrict: 'E',
        templateUrl: 'directives/jum-module2.html',
        replace: true,
        scope: {
            contactList: '=',
            secondCol: '='
        }
    }
});

// better way for jum module - use transclude
appBricks.directive('jumElem', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/jum-element2.html',
        transclude: true,
        replace: true,
        scope: {
            contactDesc: '='
        }
    }
});

appBricks.directive('jumModule', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/jum-module.html',
        replace: true,
        scope: {
            contactList: '='
        }
    }
});
