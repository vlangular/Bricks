var appBricks = angular.module('appBricks',['ngRoute','ngMessages']);

appBricks.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: '/pages/main.html',
        controller: 'mainController as main'
    })
    .when('/guess',{
        templateUrl: '/pages/guess.html',
        controller: 'guessController as guess'
    })
    .when('/about',{
        templateUrl: '/pages/about.html',
        controller: 'aboutController as about'
    })
    .when('/about/:who',{
        templateUrl: '/pages/about.html',
        controller: 'aboutController as about'
    })
}]);

appBricks.service('shareName', function() {
    var self = this;

    this.name = 'Whats your name?';
    this.nameAttr = function() {
            return self.name.length;
    };
});

appBricks.controller('mainController',['$scope','$filter','$log','shareName',function($scope,$filter,$log,shareName) {
    var main = this;

    main.title = 'Bricks!';
    main.desc = 'lorem ipsum'

    main.handle = '';

    main.toLower = function(str) {
            return $filter('lowercase')(str);
    };

    main.name = shareName.name;

    $scope.$watch(
        function() {
            return main.name;
        },
        function() {
            shareName.name = main.name;
        }
    );

}]);

appBricks.controller('guessController', function() {
    var guess = this;

    guess.trueNumber = 333;
    guess.yourNumber = '';
    guess.tries = 1;

    guess.checkNumber = function() {
        guess.yourNumber = '';
        guess.tries += 1;
    };

    guess. preventBackspace = function(e) {
        var evt = e || window.event;
        if (evt) {
            var keyCode = evt.charCode || evt.keyCode;
            if (keyCode === 8) {
                if (evt.preventDefault) {
                    evt.preventDefault();
                } else {
                    evt.returnValue = false;
                }
            }
        }
    };
});

appBricks.controller('aboutController', ['$routeParams','shareName', function($routeParamas,shareName) {
    var about = this;

    about.person = $routeParamas.who || 'nobody';

    about.personYou = shareName.name;
    about.personYouAttr = shareName.nameAttr();

}]);

appBricks.controller('headerController',function() {
    var head = this;

    head.title = 'Bricks!';
    head.navigation = [
        {name: 'Home', link:'#/'},
        {name: 'Guess', link:'#/guess'},
        {name: 'About', link:'#/about'},
        {name: 'Contact', link:'#/contact'}
    ];
});
