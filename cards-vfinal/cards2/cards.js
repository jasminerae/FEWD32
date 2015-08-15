/*
 * Draws a new card in the document <body>.
 */
function renderNewCard(title, price, size, roomImage, profileImage) {  
  var titleElement = $('<div>', {class: 'title'});
  titleElement.text(title);

  var sizeElement = $('<div>', {class: 'size'});
  sizeElement.text(size);

  var priceElement = $('<div>', {class: 'price'});
  priceElement.text(price);

  var cardElement = $('<div>', {class: 'card'});
  cardElement.css('background-image', 'url(' + roomImage + ')');

  var profileElement = $('<div>', {class: 'profile'});
  profileElement.css('background-image', 'url(' + profileImage + ')');
  
  cardElement.append(titleElement);
  cardElement.append(sizeElement);
  cardElement.append(priceElement);
  cardElement.append(profileElement);

  $('body').append(cardElement);
}
