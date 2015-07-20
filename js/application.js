$(document).ready(function () {
  $('#search-movie-input').keypress(function () {
    $('#movie').slideUp();
    //remove
  })
  $('#submit').click(function (e) {
    e.preventDefault();
    //Grab value
    var query = $('#search-movie-input').val();
    //Ajax call
    $.ajax({
    type: "GET",
    url: "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&r=json",
    dataType: "JSON",
    success: function(response){ 
      for (keys in response) {
        if (keys === 'Poster') {
          $('#movie-image').attr('src', response[keys]);
        } else if (keys === 'Title') {
          $('#movie-title').text(response[keys]);
        } else {
          //remove previous
          $('#movie-' + keys.toLowerCase()).remove();
          $('#movie-' + keys.toLowerCase() + '-label').after('<p class="col-xs-9" id="movie-' + keys.toLowerCase() + '">' + response[keys] + '</p>');
        }
      } 
      $('#movie').slideDown();
    }
  });
  })
})
