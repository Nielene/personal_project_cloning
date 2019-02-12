//=======================================================================
Tues Feb 12th 2019

reed [2:59 PM]
http://youtu.be/J6Gi8jGOGCk
https://www.youtube.com/watch?v=J6Gi8jGOGCk&feature=youtu.be
YouTubeReed Gaines
Database Review

coreyladovsky [3:29 PM]
https://www.postgresql.org/docs/9.1/datatype-character.html The docs

//==================== Reed's Twitter Example: =================================

Tweet
Retweet
Delete Tweets (not edit)
Like Tweets
Follow
Reply
Register
Edit profile

Tweet
- Reply
- Retweet
- Tweet

User
- Register
- Follow
- Edit profile

Like
- Like a Tweet


# 1 : 1
- there are no 1 to 1 relationships. rare to have a single column in your database.)


# 1 : many relationships:
- repped with a foreign key in a table
- user: tweets

User (noun)
  user_id

# many : many
  user can follow many ppl and can be followed by many ppl (followers : followed)
  repped by : a joined table: (a verb or abstract nounn that points to a verb, eg followings.)
  3 to 4(if there is a third table) columns maximum

  Followings:   (followings do not have to be mutual)
    id              
    follower_id      1      3
    followed_id      3      1


//=================================================================

Users
- id SERIAL PRIMARY KEY
- username VARCHAR UNIQUE NOT NULL
- password_digest VARCHAR NOT NULL
- bio TEXT NOT NULL
- pic_url VARCHAR
- created_at TIMESTAMP NOT NULL  (can sort post by 'new')
        - created_at TIMESTAMP        - reed edited line above

Tweets
- id SERIAL PRIMARY KEY
- body CHARACTER(280) NOT NULL
        (a tweet can be a reply to another tweet, or a retweet):
- reply_id INTEGER REFERENCES Tweets(id) ON DELETE SET NULL
        - need to reference that tweet (not the author of it (user_id))
- rt_id INTEGER REFERENCES Tweets(id) ON DELETE SET NULL
- author_id INTEGER REFERENCES Users(id) ON DELETE CASCADE
        (tweets go away too since need an author id to exist so not hang in the ether.
          the replies still remain, though)
- img_url VARCHAR
        - like_ids [] ==> if doing this hint to make a joined table for this one!
- created_at TIMESTAMP

Likes
- id SERIAL PRIMARY KEY
- user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE
- tweet_id INTEGER REFERENCES Tweets(id) ON DELETE CASCADE

Followings
- id SERIAL PRIMARY KEY
- follower_id INTEGER REFERENCES Users(id) ON DELETE CASCADE
- following_id INTEGER REFERENCES Users(id) ON DELETE CASCADE
- created_at TIMESTAMP

Notifications          - the diff things can be notified about.
- id SERIAL PRIMARY KEY
- read BOOLEAN NOT NULL
- tweet_id INTEGER REFERENCES Tweets(id) ON DELETE CASCADE
- like_id INTEGER REFERENCES Like(id) ON DELETE CASCADE
- following_id INTEGER REFERENCES Followings(id) ON DELETE CASCADE
- notified_id INTEGER REFERENCES Users(id) ON DELETE CASCADE


Trending (without timestamp on Likes, just on Posts. if a post has X many likes by this time for a tweet this old.)
Follow Notifications ( a notice of a tweet that someone i followed Liked )
