var moviesDictionary = {};

function fetchData() {
  $.get('https://ga-movies-lite.firebaseio.com/movies.json', function(movies) {
    for (var i = 0; i < movies.length; i++) {
      $('#cards-container').append(Mustache.render($('#thumbnail-template').html(), movies[i]));
    };
    
    buildDictionary(movies);
    bindEventListeners();
  });
}

function bindEventListeners() {
  $('.card').click(function(e) {
    var targetMovie = moviesDictionary[e.target.id];
    $('#lightbox-container').html(Mustache.render($('#lightbox-template').html(), targetMovie));
  });
}

function buildDictionary(movies) {
  for (var i = 0; i < movies.length; i++) {
    moviesDictionary[currentMovie.id] = movies[i];
  }
}

fetchData();
