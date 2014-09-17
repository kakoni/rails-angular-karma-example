angular.module('app', ['ngRoute', 'templates'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    });
    $locationProvider.html5Mode(true);
  })
  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] =
      angular.element(document.querySelector('meta[name=csrf-token]')).attr('content');
  });
