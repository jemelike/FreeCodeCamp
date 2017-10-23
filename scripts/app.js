var myRepo = "https://api.github.com/repos/jemelike/FreeCodeCamp/contents";
angular.module("MyApp", ["ngMaterial"])

.controller("test", function() {
    $.getJSON(myRepo).done(function(data) {
        console.log(data);
    });

})

.controller("TabOne", function($scope) {
    $scope.title = "Count Upwards";
})

.controller("TabTwo", function($scope) {
    console.log($scope);
});