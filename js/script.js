function random(input) {
  return input[Math.floor(Math.random() * input.length)];
}

$(document).ready(function() {

  /**
   * Homepage
   */
  var themeKeys = Object.keys(window.themes);

  $('#generate').click(function(event) {
    event.preventDefault();

    var theme = random(themeKeys);
    window.location.replace('generated.html?theme=' + theme);
  })

  /**
   * Individual theme page
   */
  var themeParam = window.location.search.split('=')[1];

  if (themeParam) {
    var theme = window.themes[theme];

    // Set title text
    $('#theme').text(theme.name);

    // Set (optional) background image
    if (theme.photo) {
      $('body').css('background-image', theme.photo);
    }

    // Set a specific restaurant if one exists, if not, fall back to a random one
    if (theme.restaurant) {
      $('#js-food').attr('href', theme.restaurant);
    } else {
      $('#js-food').attr('href', random(window.restaurants));
    }

    // Set a specific drink recipe if one exists, if not, fall back to a random one
    if (theme.drinks) {
      $('#js-drink').attr('href', theme.drinks);
    } else {
      $('#js-drink').attr('href', random(window.drinks));
    }

    // Set a specific playlist if one exists, if not, fall back to a random one
    if (theme.playlist) {
      $('#js-music').attr('href', theme.playlist);
    } else {
      $('#js-music').attr('href', random(window.playlists));
    }
  }

});
