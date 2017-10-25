var myRepoContents = "https://api.github.com/repos/jemelike/FreeCodeCamp/contents";
angular.module("MyApp", ["ngMaterial"])

.controller("test", function() {
    console.log("marker");
    //Retrieve project subfolders using GitHub API and displays the contents of the ReadME file
    $.getJSON(myRepoContents).done(function(data) {
        $(data).each(function(i) {
            if (data[i]['name'].includes('Project')) {
                console.log(data[i]['name']);
                $.getJSON(myRepoContents + "/" + data[i]['name'] + "/" + "README.md")
                    .done(function(data) {
                        $.getJSON(data['git_url'])
                            .done(function(data) {
                                var README = atob(data['content']);

                                console.log(README);
                            });
                    });
            }

        })

    });

})

.controller("TabOne", function($scope) {
    $scope.title = "Count Upwards";
})

.controller("TabTwo", function($scope) {
    console.log($scope);
});