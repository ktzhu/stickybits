var grafs = document.getElementsByTagName('p')

$.getJSON('data', function (data) {
  var statuses = data.statuses

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

  console.log(quoteGrafMap)
  window.quoteGrafMap = quoteGrafMap

  for (key in quoteGrafMap) {
    var grafNum = quoteGrafMap[key].grafNum
    var quoteIdx = quoteGrafMap[key].quoteIdx
    var grafNode = grafs[grafNum]
    var grafText = grafNode.innerHTML

    var highlight = "<span class='highlight user'>" + phrases[key] + "</span>"
    var newGraf = replaceBetween(quoteIdx, quoteIdx + phrases[key].length, grafText, highlight)
    grafNode.innerHTML = newGraf
  }
})

var replaceBetween = function (start, end, initText, newText) {
  return initText.substring(0, start) + newText + initText.substring(end)
}
