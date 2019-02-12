**API Endpoints:**

*HTML application*

### Root
- GET /
  - loads React web app


*JSON API*

### Users
* `GET /api/users`
  * Users index/search
  * Accepts 'subreddit' params to sort users
  * Accepts pagination params (time providing)
* `POST /api/users`
  * Creates new user
* `GET /api/users/:userId`
  * Fetches single existing user profile
* `PATCH /api/users/:userId`
  * Allows user to update their profile

### subreddit
* `POST /api/subreddit`
  * Creates new subreddit when user creates new post
* `DELETE /api/subreddit`
  * Deletes subreddit if moderators choose to

### comments
* `POST /api/comments`
  * Creates new comment under post or under comment
* `GET /api/comments`
  * comments index
* `GET /api/comment/:comment_id`
  * Fetches specific comment thread

### Posts
* `GET /api/posts`
  * Posts index
* `GET /api/post/:post_id`
  * Fetches single post
* `POST /api/post`
  * Add a post
* `DELETE /api/post`
  * Deletes post if uses chooses to

### Upvotes / Downvotes       ??????
* `GET /api/upvote`
  * Calls function that adds +1 to total votes
* `DELETE /api/upvote`
  * Calls function that adds -1 to total votes

###
