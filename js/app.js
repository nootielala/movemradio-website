(function () {
  'use strict';

  var app = angular.module('movemRadioApp', ['ngRoute']);
  
  console.log('MoveM Radio AngularJS app initialized');

  app.constant('APP_VERSION', '0.1.0');

  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    console.log('Configuring routes...');
    
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController',
        title: 'Home'
      })
      .when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutController',
        title: 'About Us'
      })
      .when('/elite-artists', {
        templateUrl: 'partials/elite-artists.html',
        controller: 'EliteArtistsController',
        title: 'Elite Artists'
      })
      .when('/radio', {
        templateUrl: 'partials/radio.html',
        controller: 'RadioController',
        title: 'MoveM Radio'
      })
      .otherwise({
        redirectTo: '/'
      });

    console.log('Routes configured successfully');
    
    // Keep hashbang for simple static hosting compatibility.
    // $locationProvider.html5Mode(true); // Enable if hosting supports server rewrite to index.html
  }]);

  app.run(['$rootScope', '$http', function($rootScope, $http) {
    $rootScope.currentYear = new Date().getFullYear();
    $rootScope.$on('$routeChangeSuccess', function(event, current) {
      if (current && current.$$route && current.$$route.title) {
        document.title = 'MoveM Radio | ' + current.$$route.title;
      }
    });

    // Detect if loaded via file:// (no HTTP server) which can break XHR template requests in some browsers.
    if (window.location.protocol === 'file:') {
      // Try to fetch one partial to confirm access.
      $http.get('partials/home.html').catch(function() {
        var el = document.getElementById('envWarning');
        if (el) {
          el.style.display = 'block';
          el.innerHTML = 'You are opening the app directly from the file system. Some browsers block loading partial templates this way. Run a local server: <code>powershell -ExecutionPolicy Bypass -File scripts/dev-server.ps1</code> or <code>python -m http.server 8080</code>.';
        }
      });
    }
  }]);

  // File upload directive for handling user music uploads
  app.directive('ngFileSelect', function() {
    return {
      link: function($scope, el) {
        el.bind('change', function(e) {
          $scope.onFileSelect(e.target.files);
        });
      }
    };
  });
})();
