function renderNewCard(image, cast, teaser) {
  var cardElement = $('<div>', {class: 'card'});
  cardElement.css('background-image', 'url(' + image + ')');

  var castElement = $('<div>', {class: 'cast'});
  castElement.text(cast);

  var teaserElement = $('<div>', {class: 'teaser'});
  teaserElement.text(teaser);

  cardElement.append(castElement);
  cardElement.append(teaserElement);

  $('body').append(cardElement);
}
