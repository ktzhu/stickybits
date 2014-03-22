var grafs = document.getElementsByTagName('p')
var phrases = {
  sext: 'sexting app',
  tech: 'technology driven',
  time: 'this is our time',
  matters: 'something that matters'
}

var quotes = {
  sext: [],
  tech: [],
  time: [],
  matters: []
}

var quoteGrafMap = {
  sext: {grafNum: 0, quoteIdx: 0},
  tech: {grafNum: 0, quoteIdx: 0},
  time: {grafNum: 0, quoteIdx: 0},
  matters: {grafNum: 0, quoteIdx: 0}
}

$.getJSON('data', function (data) {
  var statuses = data.statuses

  for (var i = 0; i < statuses.length; i++) {
    var tweet = statuses[i]
    var tweetText = tweet.text

    if (tweetText.toLowerCase().indexOf(phrases.sext) != -1) {
      quotes.sext.push(tweet)
    } else if (tweetText.toLowerCase().indexOf(phrases.tech) != -1) {
      quotes.tech.push(tweet)
    } else if (tweetText.toLowerCase().indexOf(phrases.matters) != -1) {
      quotes.matters.push(tweet)
    } else if (tweetText.toLowerCase().indexOf(phrases.time) != -1) {
      quotes.time.push(tweet)
    }
  }

  // build the map of quotes to grafs
  for (var i = 0; i < grafs.length; i++) {
    var graf = grafs[i].textContent
    for (key in quotes) {
      var quoteIdx = graf.toLowerCase().indexOf(phrases[key])
      if (quoteIdx != -1) {
        quoteGrafMap[key].grafNum = i
        quoteGrafMap[key].quoteIdx = quoteIdx
      }
    }
  }

  for (key in quoteGrafMap) {
    var grafNum = quoteGrafMap[key].grafNum
    var quoteIdx = quoteGrafMap[key].quoteIdx
    var grafNode = grafs[grafNum]
    var grafText = grafNode.innerHTML

    // highlight quote
    var highlight = "<span data-phrase='" + key + "' class='highlight user'>" + phrases[key] + "</span>"
    var newGraf = replaceBetween(quoteIdx, quoteIdx + phrases[key].length, grafText, highlight)
    grafNode.innerHTML = newGraf

  }

  paintFaces()
})


var paintFaces = function () {
  console.log('paint faces')
    // paint faces
    var template = $("aside.rail");

    var key
    $('.highlight').each(function (idx) {
      $highlight = $(this)
      toAppend = template.clone();
      $highlight.parent().after(toAppend);
      $(toAppend).offset({ top: $highlight.offset().top - 50 });

      key = $highlight[0].getAttribute('data-phrase')
    });

    var $profiles = $('.rail .profiles div');

    $profiles.each(function (index, profile) {
      console.log(key, index)
      if (quotes[key][index]) {
        $(profile).css("background-image","url(" + quotes[key][index].user.profile_image_url+")");
      }
    })
}

var replaceBetween = function (start, end, initText, newText) {
  return initText.substring(0, start) + newText + initText.substring(end)
}
