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
    $stateProvider.state('bars',{
        url: '/bars',
        templateUrl: 'pages/bars.html',
        controller: 'barsController as bars'
    });
    $stateProvider.state('contact',{
        url: '/contact',
        templateUrl: 'pages/contact.html',
        controller: 'contactController as contact'
    });
}]);
