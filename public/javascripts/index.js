$(function() {
  var twitterData = {};
  var template = $("aside.rail");

  $('.highlight').each(function(highlight) {
    $highlight = $(this)
    toAppend = template.clone();
    $highlight.after(toAppend);
    $highlight.on('click',function() {
      $(this).sibling('aside.rail').toggle();
    });
    $(toAppend).offset({ top: $highlight.offset().top - 50 });
    console.log("highlighting", highlight)
  });

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