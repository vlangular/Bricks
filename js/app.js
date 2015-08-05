var appBricks = angular.module('appBricks',['ui.router','ngMessages']);

// Factories
appBricks.factory('Data', function() {
    return {number: 53}
});
