var app = angular.module('app', ['ngResource']);

app.factory('Movie', function($resource) {
    return $resource('./public/js/movies.json');
});

app.controller('mainCtrl', function($scope, Movie) {
    $scope.movies = Movie.query();
    this.movies = $scope.movies;
    this.count = $scope.movies;

    this.clear = () => {
        this.search = "";
        document.forms['myForm'].elements['search'].focus();
    }
});