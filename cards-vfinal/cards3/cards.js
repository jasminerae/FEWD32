/*
 * Draws a new card in the document <body>.
 */
function renderNewCard(description, submitted, notes, image) {  
  var descElement = $('<div>', {class: 'description'});
  descElement.text(description);

  var submittedElement = $('<div>', {class: 'submitted'});
  submittedElement.text('Submitted by ' + submitted);

  var notesElement = $('<div>', {class: 'notes'});
  notesElement.text(notes + ' notes');

  var cardElement = $('<div>', {class: 'card'});
  cardElement.css('background-image', 'url(' + image + ')');

  var moreElement = $('<img>', {class: 'more'});
  moreElement.attr('src', 'more.png');

  var shareElement = $('<img>', {class: 'share'});
  shareElement.attr('src', 'share.png');

  var faveElement = $('<img>', {class: 'favorite'});
  faveElement.attr('src', 'favorite.png');

  cardElement.append(descElement);
  cardElement.append(submittedElement);
  cardElement.append(notesElement);

  cardElement.append(moreElement);
  cardElement.append(shareElement);
  cardElement.append(faveElement);

  $('body').append(cardElement);
}
