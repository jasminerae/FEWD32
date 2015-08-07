var spellBook = {};

function fetchData() {
  var rawTemplate = $('#spellTemplate').html();

  $.get('https://steelringers.firebaseio.com/kizze.json', function(spells) {
    for (var i = 0; i < spells.length; i++) {

      if (Array.isArray(spells[i].components)) {
        spells[i].components = spells[i].components.join('; ');
      }

      var renderedTemplate = Mustache.render(rawTemplate, spells[i]);
      $('#spellBook').append(renderedTemplate);
    };

    buildSpellBook(spells);
    bindEventListeners();
  });
}

function buildSpellBook(spells) {
  for (var i = 0; i < spells.length; i++) {
    spellBook[spells[i].key] = spells[i];
  }
}

function bindEventListeners() {
  $(".card").flip({
    axis: 'y',
    trigger: 'click'
  });

  $('.attackButton').click(function(){
    console.log("CRITICAL HIT");
  });

  $('.damageButton').click(function(){
    console.log("MAX DAMAGE");
  });
  console.log($('#attackButton'));
}

fetchData();
