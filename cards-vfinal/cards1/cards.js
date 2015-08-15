function renderNewCard(image, cast, teaser){

  $('#cards-container').append(Mustache.render($('#card-template').html(), {'image':image, 'cast':cast, 'teaser':teaser}))

};

function renderMoviesAPI() {
  $.get('https://ga-movies-lite.firebaseio.com/movies.json', function(data) {
    for (var i = 0; i < data.length; i++) {
      renderNewCard(data[i].image, data[i].cast.join(', '), data[i].teaser);
    }
  });
};

renderMoviesAPI();