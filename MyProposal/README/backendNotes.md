-- SELECT users.*, comments.*, posts.*  FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON posts.id = comments.post_id WHERE users.id = 11
-- SELECT users.*, comments.*, posts.*  FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON posts.id = comments.post_id

-- SELECT users.*, comments.*, posts.*  FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON posts.id = comments.post_id

/*SELECT t1.col, t3.col FROM table1 JOIN table2 ON table1.primarykey = table2.foreignkey
                                  JOIN table3 ON table2.primarykey = table3.foreignkey*/

-- SELECT users.*, subreddits.*, posts.* FROM subreddits JOIN users ON subreddits.id = users.subreddit_id JOIN posts ON users.id = posts.user_id

-- SELECT users.*, comments.*, posts.*  FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON posts.id = comments.post_id WHERE posts.id = 1

-- SELECT users.*, comments.*, posts.*  FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON posts.id = comments.post_id WHERE posts.id = 1 ORDER BY comments.id
-- DESC

-- SELECT subreddits.*, posts.* FROM subreddits JOIN posts ON subreddits.id = posts.subreddit_id

-- SELECT users.*, subreddits.*, posts.*, COUNT(comments.id) FROM subreddits JOIN posts ON subreddits.id = posts.subreddit_id JOIN users ON users.id = posts.user_id JOIN comments.post_id ON posts.id ORDER BY posts.id DESC

-- SELECT COUNT(comments.id) FROM comments

-- SELECT posts.*, COUNT(comments.id) FROM posts JOIN comments ON posts.id = comments.post_id GROUP BY posts.id

-- SELECT users.*, subreddits.*, posts.* , comments.* FROM subreddits JOIN posts ON subreddits.id = posts.subreddit_id JOIN users ON users.id = posts.user_id JOIN comments ON users.id = comments.user_id

-- SELECT users.*, subreddits.*, posts.* , COUNT(comments.id) FROM subreddits JOIN posts ON subreddits.id = posts.subreddit_id JOIN users ON users.id = posts.user_id JOIN comments ON users.id = comments.user_id GROUP BY users.id, subreddits.id, posts.id

-- yes
-- SELECT users.*, subreddits.*, posts.*, COUNT(comments.id) FROM subreddits JOIN posts ON subreddits.id = posts.subreddit_id JOIN users ON users.id = posts.user_id JOIN comments ON users.id = comments.user_id GROUP BY users.id, subreddits.id, posts.id ORDER BY posts.post_votes DESC

-- yes
-- SELECT users.*, subreddits.*, posts.*, comments.*, COUNT(comments.id) FROM subreddits JOIN posts ON subreddits.id = posts.subreddit_id JOIN users ON users.id = posts.user_id JOIN comments ON users.id = comments.user_id GROUP BY users.id, subreddits.id, posts.id, comments.id  ORDER BY posts.post_votes DESC

-- yes
SELECT users.*, subreddits.*, posts.*, comments.*, COUNT(comments.id) FROM subreddits JOIN posts ON subreddits.id = posts.subreddit_id JOIN users ON users.id = posts.user_id JOIN comments ON users.id = comments.user_id WHERE posts.id= 8 GROUP BY users.id, subreddits.id, posts.id, comments.id  ORDER BY posts.post_votes DESC

-- SELECT users.*, subreddits.*, posts.*, COUNT(comments.id) FROM subreddits JOIN posts ON subreddits.id = posts.subreddit_id JOIN users ON users.id = posts.user_id JOIN comments ON users.id = comments.user_id WHERE posts.id= 1 GROUP BY users.id, subreddits.id, posts.id ORDER BY posts.post_votes DESC

-- SELECT users.*, comments.*, posts.*, COUNT(comments.id)  FROM users JOIN posts ON users.id = posts.user_id JOIN comments ON posts.id = comments.post_id WHERE posts.id =1 GROUP BY users.id, comments.id, posts.id

-- SELECT users.*, subreddits.*, posts.* , comments.*, COUNT(comments.id) FROM subreddits JOIN posts ON subreddits.id = posts.subreddit_id JOIN users ON users.id = posts.user_id JOIN comments ON users.id = comments.user_id WHERE posts.id= 1 GROUP BY users.id, subreddits.id, posts.id, comments.id

-- SELECT users.*, subreddits.*, posts.* , comments.* FROM subreddits JOIN posts ON subreddits.id = posts.subreddit_id JOIN users ON users.id = posts.user_id JOIN comments ON users.id = comments.user_id WHERE posts.id= 7 GROUP BY users.id, subreddits.id, posts.id, comments.id
