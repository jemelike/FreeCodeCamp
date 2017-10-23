var myRepo = "https://api.github.com/repos/jemelike/FreeCodeCamp";
angular.module("MyApp", ["ngMaterial"])

.controller("test", function() {
    console.log("hi");
})

.controller("TabOne", function($scope) {
    $scope.title = "Count Upwards";
})

.controller("TabTwo", function($scope) {
    console.log($scope);
});