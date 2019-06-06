$.getJSON("https://www.rijksmuseum.nl/api/nl/collection?q=Q&key=kNQna9vq&format=json",function(artObjects){
  console.log(artObjects);

  $.each(artObjects, function(index, object) {
    console.log(object);

    var name = object.objectNumber;
    var bio = object.title;


    $('.name').text(name);
     $('.bio').text(bio);


    $('.output').append('<h1 class="name">' + name + '</h1><h2 class="bio">' + bio + '</h2>');
  });
});
