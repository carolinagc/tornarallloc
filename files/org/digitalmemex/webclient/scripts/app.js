
var app = angular.module('tornarFrontend', ['ngSanitize','ngRoute']);

app.config(function ($routeProvider) {
      console.log("Configuring routes")
      $routeProvider
            .when('/', {
                templateUrl: '/filerepo/org/digitalmemex/webclient/views/home.html'
            })
            .when('/map', {
                templateUrl: '/filerepo/org/digitalmemex/webclient/views/map.html',
                controller: 'sidebarController'
            })
            .otherwise({redirectTo: "/"})
    });


app.config(function($httpProvider) {
    $httpProvider.interceptors.push(function ($q){
        console.log("httpProvider");
        return {
            request: function (config) {
                console.log(config);
                return config;
            },
            response: function (result) {
                console.log("This is the response");
                return result;
            },
            responseError: function (error) {
                console.log("Failed with", error.status, "status");
                return $q.reject(error);
            }
        }
        
    });
});

        
    
                                   
     

