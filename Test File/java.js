$(document).ready(function(){
// search the collection using a JSON call

      function search(searchquery) {
        return $.getJSON("https://www.rijksmuseum.nl/api/nl/collection?q=Q&key=kNQna9vq&format=json".replace("Q", searchquery));
      }

      // creates a thumbnail image for the specified art object
      function thumbnail(object) {
        return $("<div>")
          .addClass("thumbnail")
          .css("background-image", "url(" + object.webImage.url.replace("s0", "s128") +")");
      }

      // fire the search searchquery
      search($("#searchquery").val())
        .done(function(results) {
          $("#result-table").empty();

          var $table = $("#result-table");
          $table.html("");

          // create a row for each art object found
          $.each(results.artObjects, function(index, object) {
            console.log(object);

            var $row = $('<tr class="child"><td>'
              + object.objectNumber
              +'</td><td class="thumbnail">'
              +'</td><td>'
              + object.title
              +'</td></tr>').appendTo($table);

            $row.find(".thumbnail").append(thumbnail(object));

            // make each row clickable, navigating to the relevant page on the Rijksmuseum website
            $row.on("click", function() {
              document.location = object.links.web;
            });
          })
        });
});
