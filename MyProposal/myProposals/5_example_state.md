```js

this.state = {
  currentPost: {
    id: 1,
    post_title: 'wittily named new reddit post',
    subreddit_id: 10,
    subreddit_title: 'coolly named existing subreddit',
    creator_id: 19,
    post_time: '1503280698794',
    votes: 80234,
  },
  comments: {
  190: {  id: 190,
    commentBody: {error: "Body can't be blank"},
    post_time: '1503280698794',
    post_id: 1,
    comment_id: 26, (the comment user is commenting on)},
  },
  user: {
    id: 5,
    username: 'Readable',
    karma_points: 2987,
  }
}

```
Object.values(state.comments)

* Example State => Good, maybe comments will be a list of some sort since you know you will have multiple comments on a post. Also, think about the properties of these objects and how they should correlate to your table's columns.
