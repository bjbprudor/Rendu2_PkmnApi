var pokeApp = angular.module('pokedex', ['ngResource']);

// With this you can inject POKEAPI url wherever you want
pokeApp.constant('POKEAPI', 'http://pokeapi.co');

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

pokeApp.controller("pokectrl", function($scope, $log,$http,  $resource)
{

    // Simple GET request example:
    $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokedex/1'
    }).then(function successCallback(response) {

        $scope.Lists= response.data.pokemon_entries;
        $log.info($scope.Lists);

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
    });

    //var pokelist = $resource("http://pokeapi.co/api/v2/Pokedex/",{ charge: {method:'GET', params:{charge:false}} });

    $scope.pid = "pokeid";
    $scope.nom = "pokenom";
    $scope.click = function (){
        $log.info($scope.nom);
        $log.info($scope.nom);
    };

    var pokeapi = $resource("http://pokeapi.co/api/v2/pokemon/:id/",
        {id:200},{
            charge: {method:'GET', params:{charge:true}}
        });
    $scope.pokemon = pokeapi.get();

    /*// Simple GET request example:
    $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokemon/2'
    }).then(function successCallback(response) {

        $scope.Lists= response.data;
        $log.info($scope.Lists);

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
    });*/




    //$scope.mvlist = pok.moves[0];

});


pokeApp.controller("pokectrl2", function($scope, $log,$http,  $resource)
{

    // Simple GET request example:
    $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokedex/1'
    }).then(function successCallback(response) {

        $scope.Lists= response.data.pokemon_entries;
        $log.info($scope.Lists);

    }, function errorCallback(response) {
        // called asynchronously if an error occurs
    });

    $scope.id = 0;
    $scope.nom = "pokenom";
    $scope.pks = "";

    $scope.$watch($scope.id, loadpoke);

    $scope.click = function ()
    {
        $log.info($scope.id);
        $log.info($scope.nom);
    };

    function loadpoke()
    {

        /*var pokeapi = $resource("http://pokeapi.co/api/v2/pokemon/:id/",
            {id:'@pid'},{
                charge: {method:'GET', params:{charge:true}}
            });
        $scope.pokemon = pokeapi.get();*/
    };


});

