

var _MOVIES = (function(){
  return {

      init: function(){
         $('#searchTerm').submit(function(e) {
           e.preventDefault();

           // Search for Term
            var searchTerm = $('#query').val();
              $.ajax({
                url: 'http://www.omdbapi.com/?apikey=57d13b99&s=' + searchTerm + '&r=json',
                dataType: 'json',
                success: function (data){
                  var data = data.Search;

                  // Check if search returned movies
                  if(data.length > 0 ){

                    // call display
                    _MOVIES.showMovie(data);

                    // Hide first dialogue box
                    $("#movies").addClass("slideup").delay(500);
                    $("#dialogue").addClass("slideup");
                  }

                },
                error: function(data){
                  //console.log("ERROR:  " + dataType)
                }
              });

          });
        },



  showMovie: function (results){
        // limit results
        var size = 7;

        // Trim results down
        while (results.length > size){
          var popped = results.pop();
          console.log("length:  " + results.length)
        }

        // Sort
          console.log(results)

          results.sort(function(a, b){
            var titleA = a.Title.toUpperCase();
            var titleB = b.Title.toUpperCase();
            return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
          });
          console.log(results)

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

