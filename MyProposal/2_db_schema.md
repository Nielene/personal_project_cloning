# Schema

## posts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
post_title      | string    | not null, indexed, unique
votes           | string    | not null, indexed, unique
comments        | string    | not null
type            | integer   | not null
user_id         | integer   | not null
image/gif       | string    | not null
orientation     | string    | not null



## user profiles
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username         | text      |
karma_points | text      |
subreddit_ids(many)         | text      |
comments_ids       | text      |
posts_ids      | text      |
thinking_about  | text      |
fri_night       | text      |
message_if      | text      |
user_id         | integer   | not null, foreign key

*profile belongs to a user*
*user has a profile, many messages, many threads through messages,*
*many answers*


## user/post joined table
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer      |
post_id         | integer      |

## user/comments joined table
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, primary key
comments_ids    | integer   | not null, primary key

## user/subreddits joined table
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, primary key
subreddit_id    | integer   | not null, primary key



## subreddits
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
update_time     | string    | not null

*threads have many messages, belong to user through messages*

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
message_text    | text      | not null
user_id         | integer   | not null, foreign key
thread_id       | integer   | not null, foreign key

*messages belong to threads and users*

## upvotes /downvotes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
question_text   | string    | not null
answer_one_txt  | string    | not null
answer_two_txt  | string    | not null
answer_three_txt| string    |
answer_four_txt | string    |

*questions have many answers*

## answers
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
answer_num      | integer   | not null
accepted_answers| string    | not null
importance      | integer   | not null
question_id     | integer   | not null, foreign key
user_id         | integer   | not null, foreign key

*answers belong to questions, users*
