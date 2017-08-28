var app = angular.module('ngmodule1', ['ui.router']);

app.run(function ($rootScope, $location, $state, LoginService) {
    $rootScope.$on('$stateChangeStart',
        function (event, toState, toParams, fromState, fromParams) {
            console.log('Changed state to: ' + toState);
        });
    if ($state.authenticate && !LoginService.isAuthenticated()) {
        // User isn’t authenticated
        $state.transitionTo("login");
        event.preventDefault();
    }
    // if (!LoginService.isAuthenticated()) {
    //     $location.url('/login');
    //     // Stop processing
    //     //event.preventDefault();
    //     //$state.transitionTo('login');
    // }
});


app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'loginCtrl',
            authenticate: false
        })
        .state('help', {
            url: '/help',
            templateUrl: 'views/help.html',
            authenticate: false
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            authenticate: false
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'module1Ctrl',
            authenticate: true
        });
    //Sent to login if url not found
    $urlRouterProvider.otherwise('/login');
}]);

// app.config(function ($routeProvider) {
//     $stateProvider
//         .when("/", {
//             templateUrl: "views/home.html",
//             controller: "module1Ctrl"
//         })
//         .when("/home", {
//             templateUrl: "views/home.html",
//             controller: "module1Ctrl"
//         })
//         .when("/login", {
//             templateUrl: "views/login.html",
//             controller: "loginCtrl"
//         })
//         .when("/help", {
//             templateUrl: "views/help.html"
//         })
//         .when("/about", {
//             templateUrl: "views/about.html"
//         })
// });