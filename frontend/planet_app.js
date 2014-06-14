var planet_app = angular.module('planet_app', ['ngRoute']);

planet_app.config(function($routeProvider){
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl: 'homepage/homepage.html',
            controller: 'HomepageCtrl'
        })
        .when('/mentors', {
            templateUrl: 'users/mentors.html',
            controller: 'MentorsCtrl'
        })
        .when('/profile', {
            templateUrl: 'profile/profile.html',
            controller: 'ProfileCtrl'
        })
        .when('/organization', {
            templateUrl: 'organization/organization.html',
            controller: 'OrganizationCtrl'
        })
        .when('/assembly',{
            templateUrl: 'assembly/assembly.html',
            controller: 'AssemblyCtrl'
        })
        .otherwise({ redirectTo: '/' });
});

planet_app.run(function($rootScope, $location){
    $rootScope.pageLocation = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    $rootScope.$on('$routeChangeSuccess', function(event) {
        $rootScope.pageLocation = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
    });
});