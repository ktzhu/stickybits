$(function() {
  var twitterData = {};

  $.ajax({
    type: "GET",
    url: "/data",
    success: function(response) {
      twitterData = response.statuses;
    }
  }).done(function(data) {
    var $profiles = $('.profiles div');

    $profiles.each(function(index,profile) {
      $(profile).css("background-image","url("+twitterData[index+1].user.profile_background_image_url+")");
    })
  });
});