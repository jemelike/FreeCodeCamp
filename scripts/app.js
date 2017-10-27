var myRepoContents = "https://api.github.com/repos/jemelike/FreeCodeCamp/contents";
/*
$.getJSON(myRepoContents + "/" + project + "/" + "README.md").done(function(data) {
    $.getJSON(data['git_url']).done(function(data) {
        if (!data)
            description = "";
        else {
            description = atob(data['content']);
            listing.push({ "name": project, "descript": description });
            console.log(listing);
        }
    });
});*/

function getInfo() {
    console.log("getting info")
    var project;
    var projects = [];
    var description;
    var listing = [];

    //Retrieve project subfolders using GitHub API and displays the contents of the ReadME file
    $.getJSON(myRepoContents).done(function(data) {
        $(data).each(function(i) {
            project = data[i]['name'];
            console.log(project);
            if (project.includes('Project')) {
                projects.push(project);
            }
        })

        console.log(projects);

        console.log("obtained info")
    }).fail(function(e) { console.error(e) });

}



angular.module("MyApp", ["ngMaterial"])

.controller("projects", function($scope) {
    getInfo();

})

.controller("TabOne", function($scope) {
    $scope.title = "Count Upwards";
})

.controller("TabTwo", function($scope) {
    console.log($scope);
});