

var _MOVIES = (function(){
  return {

      init: function(){
         $('#searchTerm').submit(function(e) {
           e.preventDefault();

           // Search for Term
            var searchTerm = $('#query').val();
                  $.getJSON('http://www.omdbapi.com/?apikey=57d13b99&s=' + searchTerm + '&r=json', function(data) {

                  })
                   .done(function(data) {
                     _MOVIES.showMovie(data.Search);
                      // Hide first dialogue box
                      $("#movies").addClass("slideup").delay(500);
                      $("#dialogue").addClass("slideup");
                  })
                  .fail(function() {
                   // console.log( "error" );
                  })
                  .always(function() {
                   // console.log( "complete" );
                  });


          });
        },



  showMovie: function (results){
      //console.log(results);

      // Build html to return
      var html = "";

      $.each(results, function(index, value) {
          var imdbID = value.imdbID;
          var url = "http://img.omdbapi.com/?i="
          var poster = value.Poster;
          var imgSrc = url + imdbID + '&apikey=57d13b99';
          html += '<div class="col-sm-12 col-md-3"><div class="box"><span>' + value.Title + '</span>';
          html += '<img src=' + imgSrc + '></div></div>';
      });

      // return html
      $('#search-results').html(html);


      // close movie search
      $("#close").on("click", function(){
        $('#movies').removeClass("slideup").delay(500);
        $('#dialogue').removeClass("slideup");
      })
    }

  }


})();

