function renderArray() {
  var posts = ['Brainstorming some ideas for mechanics and puzzles.', 'Ben Swinden', 21, '1.jpg'];

}

function renderObject() {
  var posts = {
    description: 'Brainstorming some ideas for mechanics and puzzles.',
    submitted: 'Ben Swinden',
    notes: 21,
    image: '1.jpg'
  };

}

function renderObjectsFromArray() {
  var posts = [
    {
      description: 'Brainstorming some ideas for mechanics and puzzles.',
      submitted: 'Ben Swinden',
      notes: 21,
      image: '1.jpg'
    },

    {
      description: 'Brainstorming some ideas for mechanics and puzzles.',
      submitted: 'Ben Swinden',
      notes: 21,
      image: '2.jpg'
    },

    {
      description: 'Brainstorming some ideas for mechanics and puzzles.',
      submitted: 'Ben Swinden',
      notes: 21,
      image: '3.jpg'
    },

    {
      description: 'Brainstorming some ideas for mechanics and puzzles.',
      submitted: 'Ben Swinden',
      notes: 21,
      image: '4.jpg'
    },

    {
      description: 'Brainstorming some ideas for mechanics and puzzles.',
      submitted: 'Ben Swinden',
      notes: 21,
      image: '5.jpg'
    }
  ];

}

function renderPostsApi() {
  $.get('https://ga-tumblr-lite.firebaseio.com/posts.json', function(posts) {
    
  });
}


// renderNewCard('Brainstorming some ideas for mechanics and puzzles.', 'Ben Swinden', 21, '1.jpg');
// renderObject();
// renderArray();
// renderObjectsFromArray();
// renderPostsApi();
