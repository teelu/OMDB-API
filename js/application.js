$(document).ready(function () {
  $('#search-movie-input').keypress(function () {
    $('#movie').slideUp();
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
        } else {
          $('#movie-' + keys.toLowerCase()).text(response[keys]);
        }
      } 
      $('#movie').slideDown();
    }
  });
  })
})
