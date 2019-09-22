// Set the Access Token
var accessToken = '9f061d26c5a8be96b17a81718959a67dd54ca9669ca41752777193f7cc5be7c3';

// Call Dribble v2 API
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?page=1&per_page=6&access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {  
      if (data.length > 0) { 
        $.each(data.reverse(), function(i, val) {                
          $('#shots').prepend(
            '<div class="col-xs-6 col-md-4" style="margin-bottom:3rem;"><div class="card"><a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><img src="'+ val.images.hidpi +'"/><div class="description" style="padding:1rem;">' + val.title + '</div></a></div></div>'
            )
        })
      }
      else {
        $('#shots').append('<p>No shots yet!</p>');
      }
    }
});
console.log('dribbble')

// API Variables

//Image width 800x600 (Animated)
  // val.images.hidpi 
//Image width 400x300
  // val.images.normal
//Image width 200x150
  // val.images.teaser
//Title
  // val.title
//Description
  // val.description
//URL
  // val.html_url