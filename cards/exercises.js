
function renderArray() {
  var movie = ['1.jpg', 'George Clooney, Mark Wahlberg, Ice Cube', "The Gulf War is over, and three soldiers want to go home rich. Major Archie Gates retires in two weeks. Sergeant Troy Barlow is a new father. Chief Elgin is on a four-month paid vacation from Detroit. Saddam Hussein stole a great deal of gold from Kuwait, and these soldiers have no problem with stealing it from him. But on their way to collect their booty, they bear witness to the the disturbing results of the war effort. President Bush has encouraged Iraqi citizens to fight back against Saddam and pledged to support them, but when they rise up, they get NO American support, and they're getting slaughtered. As the soldiers realize the true situation in Iraq, they're confronted with their own humanity, and they're forced to rethink who they are and what they're doing."];
  
}

function renderObject() {
  var movie = {
    image: '1.jpg',
    cast: 'George Clooney, Mark Wahlberg, Ice Cube',
    teaser: "The Gulf War is over, and three soldiers want to go home rich. Major Archie Gates retires in two weeks. Sergeant Troy Barlow is a new father. Chief Elgin is on a four-month paid vacation from Detroit. Saddam Hussein stole a great deal of gold from Kuwait, and these soldiers have no problem with stealing it from him. But on their way to collect their booty, they bear witness to the the disturbing results of the war effort. President Bush has encouraged Iraqi citizens to fight back against Saddam and pledged to support them, but when they rise up, they get NO American support, and they're getting slaughtered. As the soldiers realize the true situation in Iraq, they're confronted with their own humanity, and they're forced to rethink who they are and what they're doing." 
  }

}

function renderObjectComplex() {
  var movies = [
    {
      image: '1.jpg',
      cast: 'George Clooney, Mark Wahlberg, Ice Cube',
      teaser: "The Gulf War is over, and three soldiers want to go home rich. Major Archie Gates retires in two weeks. Sergeant Troy Barlow is a new father. Chief Elgin is on a four-month paid vacation from Detroit. Saddam Hussein stole a great deal of gold from Kuwait, and these soldiers have no problem with stealing it from him. But on their way to collect their booty, they bear witness to the the disturbing results of the war effort. President Bush has encouraged Iraqi citizens to fight back against Saddam and pledged to support them, but when they rise up, they get NO American support, and they're getting slaughtered. As the soldiers realize the true situation in Iraq, they're confronted with their own humanity, and they're forced to rethink who they are and what they're doing."
    },
    {
      image: '2.jpg',
      cast: 'Mark Wahlberg, Jack Reynor, Nicola Peltz',
      teaser: "Transformers: Age of Extinction begins after an epic battle left a great city torn, but with the world saved. As humanity picks up the pieces, a shadowy group reveals itself in an attempt to control the direction of history...while an ancient, powerful new menace sets Earth in its crosshairs. With help from a new cast of humans (led by Mark Wahlberg), Optimus Prime and the Autobots rise to meet their most fearsome challenge yet. In an incredible adventure, they are swept up in a war of good and evil, ultimately leading to a climactic battle across the world."
    },
    {
      image: '3.jpg',
      cast: 'Forest Whitaker, Oprah Winfrey, John Cusack',
      teaser: "The Butler tells the story of a White House butler who served eight American presidents over three decades. The film traces the dramatic changes that swept American society during this time, from the civil rights movement to Vietnam and beyond, and how those changes affected this man's life and family. Forest Whitaker stars as the butler with Robin Williams as Dwight Eisenhower, John Cusack as Richard Nixon, Alan Rickman as Ronald Reagan, James Marsden as John F. Kennedy, Liev Schreiber as Lyndon B. Johnson, and many more. Academy Award (R) nominated Lee Daniels (PRECIOUS) directs and co-wrote the script with Emmy (R)-award winning Danny Strong (GAME CHANGE)."
    }
  ];

}

function renderObjectKeys() {
  var movies = {
    'threekings': {
      image: '1.jpg',
      cast: 'George Clooney, Mark Wahlberg, Ice Cube',
      teaser: "The Gulf War is over, and three soldiers want to go home rich. Major Archie Gates retires in two weeks. Sergeant Troy Barlow is a new father. Chief Elgin is on a four-month paid vacation from Detroit. Saddam Hussein stole a great deal of gold from Kuwait, and these soldiers have no problem with stealing it from him. But on their way to collect their booty, they bear witness to the the disturbing results of the war effort. President Bush has encouraged Iraqi citizens to fight back against Saddam and pledged to support them, but when they rise up, they get NO American support, and they're getting slaughtered. As the soldiers realize the true situation in Iraq, they're confronted with their own humanity, and they're forced to rethink who they are and what they're doing."      
    },

    'transformers': {
      image: '2.jpg',
      cast: 'Mark Wahlberg, Jack Reynor, Nicola Peltz',
      teaser: "Transformers: Age of Extinction begins after an epic battle left a great city torn, but with the world saved. As humanity picks up the pieces, a shadowy group reveals itself in an attempt to control the direction of history...while an ancient, powerful new menace sets Earth in its crosshairs. With help from a new cast of humans (led by Mark Wahlberg), Optimus Prime and the Autobots rise to meet their most fearsome challenge yet. In an incredible adventure, they are swept up in a war of good and evil, ultimately leading to a climactic battle across the world."
    },

    'butler': {
      image: '3.jpg',
      cast: 'Forest Whitaker, Oprah Winfrey, John Cusack',
      teaser: "The Butler tells the story of a White House butler who served eight American presidents over three decades. The film traces the dramatic changes that swept American society during this time, from the civil rights movement to Vietnam and beyond, and how those changes affected this man's life and family. Forest Whitaker stars as the butler with Robin Williams as Dwight Eisenhower, John Cusack as Richard Nixon, Alan Rickman as Ronald Reagan, James Marsden as John F. Kennedy, Liev Schreiber as Lyndon B. Johnson, and many more. Academy Award (R) nominated Lee Daniels (PRECIOUS) directs and co-wrote the script with Emmy (R)-award winning Danny Strong (GAME CHANGE)."
    },
  };

}

function renderObjectAPI() {
  $.get('https://ga-movies-lite.firebaseio.com/movies.json', function(data) {
    
  });
}

function renderFlickrAPI() {
  $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', {
    format: "json",
    tags: "mount rainier"
  }, processFlickrData);
}

function processFlickrData(data) {
}


// renderSimple('1.jpg', 'George Clooney, Mark Wahlberg, Ice Cube', "The Gulf War is over, and three soldiers want to go home rich. Major Archie Gates retires in two weeks. Sergeant Troy Barlow is a new father. Chief Elgin is on a four-month paid vacation from Detroit. Saddam Hussein stole a great deal of gold from Kuwait, and these soldiers have no problem with stealing it from him. But on their way to collect their booty, they bear witness to the the disturbing results of the war effort. President Bush has encouraged Iraqi citizens to fight back against Saddam and pledged to support them, but when they rise up, they get NO American support, and they're getting slaughtered. As the soldiers realize the true situation in Iraq, they're confronted with their own humanity, and they're forced to rethink who they are and what they're doing.");
renderArray();
renderObject();
// renderObjectKeys();
// renderObjectComplex();
// renderObjectAPI();
// renderFlickrAPI();

