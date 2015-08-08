var spellBook = {};
var damage = 0;

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

  $('.attackButton').click(function(e){
    console.log("CRITICAL HIT");
    event.stopPropagation();
    var targetSpell = $(this).parent().parent().id;
    console.log(targetSpell);
  });

  $('.damageButton').click(function(e){
    event.stopPropagation();
    console.log("MAX DAMAGE");
    damage = 0;
    console.log(rollDamage(n, d));
  });
}

fetchData();

function rollDamage(n, d) {
  for (var i = 0; i < n; i++) {
    damage += Math.floor(Math.random * d) + 1;
    return damage;
  };
}
