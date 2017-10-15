angular.module("MyApp", ["ngMaterial"])

.controller("TabOne", function($scope) {
    $scope.title = "Count Upwards";
})

.controller("TabTwo", function($scope) {
    console.log($scope);
});