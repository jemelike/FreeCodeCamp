var rvprop = "content";
var prop = "revisions";
var search_results = [];

$("document").ready(function() {
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };
    var title = getParameterByName('search');
    $("btn_search").click(wiki_search(title)); //Note: Do not use HTML attribute onclick. Add the functionality when the application is 
});

function wiki_search(title) {
    //Used Google Chrome CORS extension and this particular Javascript function to overcome cross origin resource sharing 
    $.ajax({
        url: '//en.wikipedia.org/w/api.php',
        data: { action: 'query', list: 'search', srsearch: title, format: 'json' },
        dataType: 'jsonp',
        success: function(x) {
            $.each(x.query.search, function(i, item) {
                console.log(x.query.search[i]);
                link = "https://en.wikipedia.org/wiki/" + x.query.search[i].title.replace(/\s/gi, '_');
                $("#results").append("<div id=" + x.query.search[i].id + " class='info'><a href=" + link + "><h3>" + x.query.search[i].title + "</h3></a>" + x.query.search[i].snippet + "...</div>");

            })
        }
    });
}