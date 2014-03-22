# SNDmakes stickybits

surfboardt

## running locally

this app uses express.js so cd to your project directory and just run:

```
$ npm start
```

this starts a local server at port 3000

the data is currently at a `/data` endpoint:

`localhost:3000/data?type=long` fetches the long url tweet data

`localhost:3000/data?type=short` fetches the short url tweet data

(it defaults to long if no query param is specified)
