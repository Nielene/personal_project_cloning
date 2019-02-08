# Schema

## posts
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
post_title           | string    | not null, indexed, unique
user_id              | integer   | not null, foreign key
date_created         | integer   | not null
votes                | string    | not null
comments             | string    | not null
type (gif, v, text)  | string    | not null
image/gif            | string    | not null

*post belongs to a single user*
*post belongs to a single subreddit*
*posts have many users, many comments*

## user profiles
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
username             | text      |
karma_points         | text      |
<!-- subreddit_ids(many)  | text      | -->
<!-- comments_ids         | text      | -->
<!-- posts_ids            | text      | -->

*profile belongs to a user*
*user has a profile, many posts, many threads through comments,*
*many subreddits*

## subreddits
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
date_created    | string    | not null
creator_id      | integer   | not null, foreign key (user_id)
<!-- moderator_ids   | integer   | not null, foreign key (user_id) -->
num_of_users    | integer   | not null
num_of_posts    | integer   | not null

*subreddits have many posts, many comments*
*belong to user/creator through post*
*has many moderators*

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
comment_text    | text      | not null
subreddit_id    | integer   | not null, foreign key
post_id         | integer   | not null, foreign key
user_id         | integer   | not null, foreign key

*comments belong to subreddits, posts and users*

## upvotes /downvotes ##?????
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key

*questions have many answers*

## user/post joined table
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
post_id         | integer   | not null, foreign key

## user/comments joined table
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key
comments_id     | integer   | not null, foreign key

## user/subreddits joined table
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
creator_id      | integer   | not null, foreign key (user_id)
subreddit_id    | integer   | not null, foreign key

## subreddit/moderators joined table  **????**
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
subreddit_id       | integer   | not null, foreign key
moderator_id       | integer   | not null, foreign key (user_id)
