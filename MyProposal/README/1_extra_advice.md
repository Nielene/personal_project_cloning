
coreyladovsky [3:03 PM]
This is what I used to do all my planning! https://github.com/coreyladovsky/help/wiki Take a look for more ideas!
https://www.corey-ladovsky-help.club/#/
https://www.coreyladovsky.com/ -> projects


reed [3:25 PM] | web days | feb 5th 2019 |
https://github.com/crymall/ok_corral/tree/master/docs
EXAMPLE MVPs:
- Reddit: Users, Posts, Comments, Upvotes/Downvotes, Subreddits
- Pinterest: Users, Boards, Posts, Pins
- Evernote: Users, Notes, Tags
- Tumblr: Users, Posts, Tags, Likes, Follows
Remember, MVPs don't represent a visual aesthetic, or whatever - they represent feature-sets! What does your user expect to do, at minimum, and what elements will allow them to do that?

Corey: coreyladovsky [3:57 PM]
Example wireframes: https://github.com/coreyladovsky/help/wiki/wireframes

Reed: Proposal needs:
- Minimum Viable Product
- DB Schema
- API Endpoints
- React Component Structure
- Example State
- Wireframes
- Implementation Timeline/Schedule


Alejo:
do component tree:
app parent of them all.
relationship among components
- helps with passing props and where want to keep state
might have multiple states.

CSS
Material UI - library.
visual parts are pre-made: eg Navbars.
but will spend too much time figuring out how it works.

to get all posts by a specific tag - join both tables.

Mine:
How to use reddit:
https://www.youtube.com/watch?v=g4oljFEvsiI

old subreddit:
https://old.reddit.com/

https://mashable.com/2012/06/06/reddit-for-beginners/#ZW2mr22g9Eq3

draw.io
wireframe.cc



Jung the Great [11:23 AM]
Also if you are curious about API route for Reddit, check this out
https://www.reddit.com/dev/api#GET_best
reddit.com
reddit.com: api documentation
Reddit gives you the best of the internet in one place. Get a constantly updating feed of breaking news, fun stories, pics, memes, and videos just for you. Passionate about something niche? Reddit has thousands of vibrant communities with people that share your interests. Alternatively, find out what’s trending across all of Reddit on r/popular. Reddit is also anonymous so you can be yourself, with your Reddit profile and persona disconnected from your real-world identity.



crymall 'redux 1A' codesandbox  upvotes/downvotes
https://codesandbox.io/s/2lkk7484y


JinSoo [11:11 AM]
https://www.reddit.com/r/django/comments/7czebj/how_does_reddit_implement_its_upvotedownvote/
reddit
r/django - How does Reddit implement its upvote/downvote system?


Mateo [10:02 AM]
for db schema visualization:
https://dbdiagram.io/
dbdiagram.io
A Free Database Designer for Developers and Analysts
Quick and simple free tool to help you draw your database relationship diagrams and flow quickly using just keyboard

Alejandro:
Regarding the timeline: Look at Trello for my most current project for a reference if you need to https://trello.com/b/VcQgZhci/foobar

Xavier:
- clicked. take current count. update it. make another get request to
on click. click send put request to change vote count.
run 2nd get request to run 2nd vote count. (2 get request back to back)


reed [5:47 PM]
small note: It's not just TIMESTAMP in sql, it's TIMESTAMP DEFAULT CURRENT_TIMESTAMP

Reed:
- need USER AUTHENTICATION.
- EXAMPLE USER Login BUTTON for testing.


reed [2:59 PM] Tues Feb 12th 2019
http://youtu.be/J6Gi8jGOGCk
YouTubeReed Gaines
Database Review


coreyladovsky [3:29 PM] Tues Feb 12th 2019
https://www.postgresql.org/docs/9.1/datatype-character.html The docs


xpectro/JonA:

- pwd
- express backend
- cd backend
- npm install
- create-react-app frontend     (inside backend)
- cd frontend/
- npm install react-redux react axios react-dom redux-logger redux-thunk redux react-router-dom

latergram - express
backend: warmUp - class0204 - corey - latergram.
package manager - faker, reddit,
frontend: help, unit4 practice (only partially)


someone_reddit
disc_reddit
read_it
disc_reddit
re_reddit

Isa:
animate.css

Alejandro:
get random record sql
https://stackoverflow.com/questions/19412/how-to-request-a-random-row-in-sql
db.any("SELECT * FROM posts WHERE post_type = 'img' ORDER BY RANDOM() ")    *DB.ANY RETURNS A PROMISE. SO, USE .THEN*
.then ( post => {
  res.status(200).json(
    'status':
    'message':
    )
  })

  CAN ONLY USER SINGLE QUOTES IN SQL.
  THE OUTER QUOTES CAN ONLY BE DOUBLE QUOTES
  SELECT


Me:

faker.date.between: https://github.com/Marak/faker.js/issues/344
https://stackoverflow.com/questions/35235318/how-to-use-faker-date-between-faker-js
```js
self.between = function (from, to) {
  var fromMilli = Date.parse(from);
  var dateOffset = faker.random.number(Date.parse(to) - fromMilli);

  var newDate = new Date(fromMilli + dateOffset);

  return newDate;
};
```

Alejandro/Isa:
background-image css :
inside teh database, where the SELECT .

<div classname= .. style={ {backgroundImage: `url("${this.state.img}")` } } > </div>


PSequel:
in Query tab of whatever database:
```SQL
UPDATE posts SET body='something new' WHERE id=3;
```


db.none("INSERT INTO posts (post_title,post_body, image_url, date_created, votes) VALUES " + posts + ";")
.then(() => {
  db.none("INSERT INTO up_down_votes (initial_count, type, post_id) VALUES " + up_down_votes + ";")
})
.catch(err => {
  console.log(err);
})
