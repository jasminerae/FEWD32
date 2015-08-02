var spellBook = {};

function fetchData() {
  var rawTemplate = $('#spellTemplate').html();

  $.get('http://steelringers.firebaseio.com/kizze.json', function(spells) {
    for (var i = 0; i < spells.length; i++) {
      console.log(spells[i]);
      var renderedTemplate = Mustache.render(rawTemplate, spells[i]);
      $('#spellBook').append(renderedTemplate);
    };

    buildSpellBook(spells);
  });
}

function buildSpellBook(spells) {
  for (var i = 0; i < spells.length; i++) {
    spellBook[spells[i].key] = spells[i];
  }
}

fetchData();
