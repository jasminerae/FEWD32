
function renderArray() {
  var rental = ['Flatiron studio next to Madison Park', '$175', 'Private room', 'room1.jpg', 'profile1.jpg'];

}

function renderObject() {
  var rental = {
    title: 'Flatiron studio next to Madison Park',
    price: '$175',
    size: 'Private room',
    room: 'room1.jpg',
    profile: 'profile1.jpg'
  };

}

function renderObjectsFromArray() {
  var rentals = [
    {
      title: 'Flatiron studio next to Madison Park',
      price: '$175',
      size: 'Private room',
      room: 'room1.jpg',
      profile: 'profile1.jpg'
    },

    {
      title: 'Cozy room in Hells Kitchen',
      price: '$96',
      size: 'Entire home',
      room: 'room2.jpg',
      profile: 'profile2.jpg'
    },

    {
      title: 'Amazing studio in heart of Manhattan',
      price: '$80',
      size: 'Private room',
      room: 'room3.jpg',
      profile: 'profile3.jpg'
    }
  ];

}


function renderRentalsAPI() {
  $.get('https://ga-rentals-lite.firebaseio.com/rentals.json', function(rentals) {
    
  });
}


// renderNewCard('Bedroom with Garden at the Back', '$70', 'Private room', 'room1.jpg', 'profile1.jpg');

// renderArray();
// renderObject();
// renderObjectsFromArray();
// renderRentalsAPI();
