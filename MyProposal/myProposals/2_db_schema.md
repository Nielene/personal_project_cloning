# Schema

## posts
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
post_title           | string    | not null, indexed, unique
user_id              | integer   | not null, foreign key
date_created         | integer   | not null
votes                | integer   | not null     - only one per user - toggle
comments             | string    | not null     - XXXX no need for post to point to multi comments
type (gif, v, text)  | string    | not null
image/gif            | string    | not null
subreddit_title      | string    | not null     - yes

make query that gets all posts from a subreddit title.

*post belongs to a single user*
*post belongs to a single subreddit*
*posts have many users, many comments*

## user profiles
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
username             | text      | not null
karma_points         | integer   | not null
<!-- subreddit_ids(many)  | text      | -->
<!-- comments_ids         | text      | -->
<!-- posts_ids            | text      | -->

*profile belongs to a user*
*user has a profile, many posts, many threads through comments,*
*many subreddits*


## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
comment_text    | text      | not null
subreddit_id    | integer   | not null, foreign key     - XXXXXXX
post_id         | integer   | not null, foreign key
user_id         | integer   | not null, foreign key

*comments belong to subreddits, posts and users*



## upvotes /downvotes           
column name  | data type                  | details
-------------|----------------------------|-----------------------
id           | integer                    | not null, primary key
post_id      | integer                    | not null, foreign key
type         | boolean: Upvote/Downvote   | default null

// update it to your store.

//------------ Recall BOOL: --------------//
```sql
CREATE TABLE species (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  is_mammal BOOL NOT NULL DEFAULT false
);
```
//----------------------------------------//




//================== Discards: ====================================


## user/comments joined table      **????????** XXXXXXXX  **?????????** not commenting on a user
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
comments_id     | integer   | not null, foreign key

## user/post joined table                   XXXXXXXXX
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
post_id         | integer   | not null, foreign key

## subreddits      XXXXXX
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
date_created    | string    | not null
creator_id      | integer   | not null, foreign key (user_id)
<!-- moderator_ids   | integer   | not null, foreign key (user_id) -->
num_of_users    | integer   | not null
num_of_posts    | integer   | not null

*subreddits have many posts, many comments* *belong to user/creator through post* *has many moderators*

## user/subreddits joined table                             XXXXXXXXX
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
creator_id      | integer   | not null, foreign key (user_id)
subreddit_id    | integer   | not null, foreign key

## subreddit/moderators joined table  **????**              XXXXXXXX
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
subreddit_id       | integer   | not null, foreign key
moderator_id       | integer   | not null, foreign key (user_id)
