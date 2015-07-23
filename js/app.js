var appBricks = angular.module('appBricks',['ui.router','ngMessages']);

// Routes
appBricks.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
    $stateProvider.state('index',{
        url: '',
        templateUrl: 'pages/main.html',
        controller: 'mainController as main'
    });
    $stateProvider.state('guess',{
        url: '/guess',
        templateUrl: 'pages/guess.html',
        controller: 'guessController as guess'
    });
    $stateProvider.state('about',{
        url: '/about',
        templateUrl: 'pages/about.html',
        controller: 'aboutController as about'
    });
    // $stateProvider.state('about',{
    //     url: 'about/:who',
    //     templateUrl: '/pages/about.html',
    //     controller: 'aboutController as about'
    // })
    $stateProvider.state('gallery',{
        url: '/gallery',
        templateUrl: 'pages/gallery.html',
        controller: 'galleryController as gallery'
    });
}]);

// Services
appBricks.service('shareName', function() {
    var self = this;

    this.name = 'Whats your name?';
    this.nameAttr = function() {
            return self.name.length;
    };
});

appBricks.service('getProp', function() {
    var getProp = this;

    getProp.insideProp = 'deep';
});

appBricks.service('getImages', function() {
    var getImages = this;


});

// Filters
appBricks.filter('drouble', function(Data) {
    return function(number) {
        return number*2 + ' is the drouble of ' + Data.number
    }
});

// Factories
appBricks.factory('Data', function() {
    return {number: 53}
});

// Directives
appBricks.directive('angry-block', function() {
    return {
        link: function(scope, element, attrs) {
            element.on('mouseenter', function(e) {
                element.addClass(attrs.angry-block);
            })
        }
    }
});
appBricks.directive('calm-block', function() {
    return {
        link: function(scope, element, attrs) {
            console.log('im out');
            element.on('mouseleave', function(e) {
                element.removeClass(attrs.angry-block);
                element.addClass(attrs.calm-block);
            })
        }
    }
});

// Controllers
appBricks.controller('mainController',['$scope','$filter','$log','shareName','getProp','Data',function($scope,$filter,$log,shareName,getProp,Data) {
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

    main.message = getProp.insideProp;

    main.data = Data;

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

appBricks.controller('galleryController', function($scope) {
    var gallery = this;

    gallery.images = [];

    var dir = "getImagesDir/";
    var fileextension = ".jpg";
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
            //Lsit all png file names in the page
            $(data).find("a:contains(" + fileextension + ")").each(function () {
                var filename = this.href.replace(window.location, "").replace("http://", "");
                // $("body").append($("<img src=" + dir + filename + "></img>"));
                console.log(filename);
                gallery.images.push(filename);
            });
        }
    });
});

appBricks.controller('aboutController', ['shareName','getProp', function(shareName,getProp) {
    var about = this;

    about.personYou = shareName.name;
    about.personYouAttr = shareName.nameAttr();

    about.message = getProp.insideProp;

}]);

appBricks.controller('headerController',function() {
    var head = this;

    head.title = 'Bricks!';
    head.navigation = [
        {name: 'Home', link:'index'},
        {name: 'Guess', link:'guess'},
        {name: 'Gallery', link:'gallery'},
        {name: 'About', link:'about'},
        {name: 'Contact', link:'contact'}
    ];
});
