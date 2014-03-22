var Twitter = require('twitter')
var util = require('util')
var fs = require('fs')

var longUrl = 'http://www.nytimes.com/2014/03/16/magazine/silicon-valleys-youth-problem.html'
var shortUrl = 'http://nyti.ms/1gp29ue'

var twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
})

console.log(process.env.TWITTER_CONSUMER_KEY)
console.log(process.env.TWITTER_CONSUMER_SECRET)
console.log(process.env.TWITTER_ACCESS_KEY)
console.log(process.env.TWITTER_ACCESS_SECRET)

twitterClient.search(longUrl, {count: 100}, function (data) {
  fs.writeFileSync('longUrl.json', JSON.stringify(data))
})

twitterClient.search(shortUrl, {count: 100}, function (data) {
  fs.writeFileSync('shortUrl.json', JSON.stringify(data))
})
