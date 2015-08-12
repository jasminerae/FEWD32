var spellBook = {};
var damage = 0;
var attack = 0;

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
    spellBook[spells[i].id] = spells[i];
  }
}

function bindEventListeners() {
  $(".card").flip({
    axis: 'y',
    trigger: 'click'
  });

  $('.attackButton').click(function(e){
    event.stopPropagation();
    var targetSpell = $(this).parent().parent().parent().attr('id');
    attack = 0
    attack = (rollAttack());
    $('#'+targetSpell+'attackResult').html(attack);
  });

  $('.damageButton').click(function(e){
    event.stopPropagation();
    var targetSpell = $(this).parent().parent().parent().attr('id');
    damage = 0
    damage = (rollDamage(spellBook[targetSpell].n, spellBook[targetSpell].d));
    $('#'+targetSpell+'damageResult').html(damage);
  });
}

fetchData();

function rollAttack() {
  attack += (Math.floor(Math.random() * 20)) + 1;
  if (attack == 20){
    attack = "CRIT"
  } else { attack = attack + 1; } //dex mod
  return attack;
}

function rollDamage(n, d) {
  for (var i = 0; i < n; i++) {
    damage += (Math.floor(Math.random() * d)) + 1;
  };
  return damage;
}
