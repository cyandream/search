$(function(){

    $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
        var myData = data.Search;
         console.log(myData);
         $.each(myData, function(index, value){
            console.log(value.Title);
            $('#search-results').append(value.Title);
         });

    });
});