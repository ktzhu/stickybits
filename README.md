#SNDmakes sluice
**See it in action:** http://pacific-refuge-9000.herokuapp.com/

Sluice is a prototype javascript app to track, surface and leverage social conversation around a story. When users come to a piece, they can identify the specific ideas within that story that their friends are discussing on social media. Using a simple highlight, we're conveying to the user what topics are hot in a passively digestible form. Sluice also provides media organizations an easy and efficient way to take advantage of the social media conversation that revolves around stories. Sluice can help a news org self-aggregate the stickiest ideas and plan future coverage around trending topics and atomic details.

Close the loop. Get the social gold.

Goal: Our goal for Sluice at #SNDmakes was to build a prototype that showcased the intended functionality while working within a tight timeframe. Toggle between user and editor views to see how this might work.

What we did: In our prototype's user view, we have pulled a small set of Twitter records to demonstrate how Sluice might work. The editor view is static, but both serve as a proof of concept, a clear sign that both users and editorial teams can benefit from closing the social loop with more focus within a story.

Future possibilities: Sluice could be developed into a more robust tool using natural language processing, enhanced API integration and by incorporating additional social media streams. At the CMS level, that same natural language processing could build out even more granular taxonomy at the story level. By breaking down the story into conceptual chunks, that information could also be cross-referenced against our social data; users would get an even clearer idea of what parts of a story they might want to pay more attention to while editors, producers and reporters could use a more heat-mapped view to further extrapolate larger trends. 

TeamPink is: Huge Ma, Rebekah Monson, Cory Williams, Tim Wong, Katie Zhu, Nicole Zhu

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
