$(document).ready(function(){
  var data =
  [
    {
	"name":"Rembrandt",
	"work":"De Nachtwacht, Jerimiah Lamenting the Destruction of Jerusalem, Self Portrait Rembrandt, Tobit and Anna witht he Kid",
	"image":"Rembrandt.png",
	"url":"'rembrandt.html'"
    },
    {
	"name":"Nachtwacht",
	"work":"Rembrandt van Rijn",
	"image":"Nachtwacht.png",
	"url": "'nachtwacht.html'"
    },

    {
	"name":"Self Portrait Rembrandt",
	"work":"Rembrandt van Rijn",
	"image":"rembrandtself.png",
	"url": "'rembrandtselfportrait.html'"
    },


    {
	"name":"Jeremiah Lamenting the Destruction of Jerusalem",
	"work":"Rembrandt van Rijn",
	"image":"jeremiah.png",
	"url": "'jeremiah.html'"
    },

    {
	"name":"Tobit and Anna with the Kid",
	"work":"Rembrandt van Rijn",
	"image":"Tobit.png",
	"url": "'tobit.html'"
    },


    {
	"name":"Vincent van Gogh",
	"work":"Self Portrait van Gogh, Farming Village at Twilight, Farm in Provence",
	"image":"vangogh.png",
	"url": "'vangogh.html'"
    },


    {
	"name":"Self Portrait van Gogh",
	"work":"Vincent van Gogh",
	"image":"vangoghself.png",
	"url": "'vangoghselfportrait.html'"
    },


    {
	"name":"Farming Village at Twilight",
	"work":"Vincent van Gogh",
	"image":"twilight.png",
	"url": "'twilight.html'"
    },


    {
	"name":"Farm in Provence",
	"work":"Vincent van Gogh",
	"image":"provence.png",
	"url": "'provence.html'"
    },

    {
	"name":"Caesar Boëtius van Everdingen",
	"work":"Girl in a Large Hat, Pan and Syrinx, A Young Woman Warming her Hands over a Brazier: Allegory of Winter",
	"image":"boetius.png",
	"url": "'boetius.html'"
    },


    {
	"name":"Girl in a Large Hat",
	"work":"Caesar Boëtius van Everdingen",
	"image":"hat.png",
	"url": "'hat.html'"
    },


    {
	"name":"Pan and Syrinx",
	"work":"Caesar Boëtius van Everdingen",
	"image":"syrinx.png",
	"url": "'syrinx.html'"
    },



    {
	"name":"A Young Woman Warming her Hands over a Brazier: Allegory of Winter",
	"work":"Caesar Boëtius van Everdingen",
	"image":"brazier.png",
	"url": "'brazier.html'"
    },


    {
	"name":"George Hendrik Breitner",
	"work":"Labourers Pulling a Heavily Laden Cart on Jacob van Lennepkade, Amsterdam, Girl in a White Kimono, The Rokin in Amsterdam",
	"image":"breitner.png",
	"url": "'breitner.html'"
    },

    {
	"name":"Labourers Pulling a Heavily Laden Cart on Jacob van Lennepkade, Amsterdam",
	"work":"George Hendrik Breitner",
	"image":"labourers.png",
	"url": "'labourers.html'"
    },


    {
	"name":"Girl in a White Kimono",
	"work":"George Hendrik Breitner",
	"image":"kimono.png",
	"url": "'kimono.html'"
    },


    {
	"name":"The Rokin in Amsterdam",
	"work":"George Hendrik Breitner",
	"image":"rokin.png",
	"url": "'rokin.html'"
    },



    ];


//Code is based by watching youtube videos
$('#search').keyup(function(){
    var input = $(this).val();


    if(input === '')  {
    $('#resultsdiv').html('');
    return;
    }
          var regex = new RegExp(input, "i");
          var result = '<div id="row">';
          var count = 1;
      $.each(data, function(key, val){

      if ((val.name.search(regex) != -1)) {
        result += '<div><tr onclick="window.location.href='+val.url+'">';
        result += '<td><div><img src="'+val.image+'" alt="'+ val.name +'" /></div></td>';
        result += '<div">';
        result += '<td><p>' + val.name + '</p></td>';
        result += '<td><p>' + val.work + '</p></td>';
        result += '</div>';
        result += '</tr></div>';


        if(count%2 == 0){
        result += '</div><div id="row">'
        }
        count++;
        }
      });
      result += '</div>';
      $('#resultsdiv').html(result);

      });
});


/* source for this function:
	https://www.w3schools.com/howto/howto_js_sort_table.asp
	The table sort by name by clicking the header so the best before date and
	amount also sort by name. */

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
