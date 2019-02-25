**Minimum Viable Product**

HOME PAGE:
- can immediately see a list of posts that fit 'HOME', 'best', and were posted to one of 'MY SUBREDDITS'.
- list of posts - seen immediately (no clicking)
- (ComponentDidMount immediately) - implementation detail
- can be reached using 'reddit logo' in top left corner of page;
- can change 'HOME' to 'POPULAR', 'ALL' to see posts outside of MY SUBREDDITS list.
-

SUBREDDIT PAGE:
- the *name of the subreddit* is on the top left corner of the box containing the post, right before 'comments' and 'other discussions' tabs, and below the 'reddit logo'.
- immediately see list of Posts belonging to that Subreddit.

MAKING NEW TEXT POST:
- has 'title'
- has optional 'text' input area
- has 'choose where to post' radios: 'Your profile', or 'A subreddit'/text input box;
- 'your subscribed subreddits' inline list
- 'options' checkbox: 'send replies to my inbox'
- "i'm not a robot" checkbox;
- 'submit' button;

SUBMIT A NEW LINK:
- input for 'url'
- input for 'title'
- radio for 'choose where to post': 'Your profile' or 'A subreddit'; and an input box for 'subreddit' that only enabled if 'A subreddit' is chosen;
- an 'options' section with one checkbox: 'send replies to my inbox'.
- verify "i'm not a robot";
- submit button;
- on submit, 'redirecting...' to my 'profile page': https://www.reddit.com/user/WaterBasedFruits/comments/apvr5e/hello/
https://www.reddit.com/ user/{username}/comments/{comment_id}/{post_title}/
- automatically upvoted.

Posts - list of posts - seen immediately (no clicking)
  - (ComponentDidMount immediately) - implementation detail
  - can comment on Posts
  - are immediately put into a subreddit (popular choices are listed below)
  - are either links / text

Users
  - make / edit / delete their profile
  - can make Posts, Comments, Upvotes/Downvotes
  - given anonymous usernames
  - cannot change username
  - can delete own Post, own Comment, toggle Upvotes/Downvotes
  - can login / logout - extra feature
  - gain / lose karma points - extra feature

Comments
  - can be upvoted / down-voted
  - can comment on (User's) Comments

Upvotes/Downvotes
  - comments - points
  - users - karma

Subreddit
  - has a title
  - can have Posts
  - subscribe / unsubscribe

Sorting / Filters
  - funny, hot, new, rising, controversial, gilded, wiki, promote

BONUS FEATURES (TBD):
Subreddit:
  - each subreddit has its own look and slight difference in layout.
  - has own moderators  (extra feature)

//
