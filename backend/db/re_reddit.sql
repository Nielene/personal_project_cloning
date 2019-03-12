DROP DATABASE IF EXISTS re_reddit;
CREATE DATABASE re_reddit;

\c re_reddit;

DROP TABLE IF EXISTS subreddits;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS up_down_votes;
DROP TABLE IF EXISTS subreddit_posts;

CREATE TABLE subreddits (
  id SERIAL PRIMARY KEY,
  my_subreddit_title TEXT

);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(240) UNIQUE,
  password_digest VARCHAR NOT NULL,
  -- post_id INT REFERENCES posts(id) ON DELETE CASCADE,
  karma_points INT
  -- subreddit_id INT REFERENCES subreddits(id) ON DELETE CASCADE
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  post_title TEXT NOT NULL,
  post_body TEXT,
  image_url TEXT,
  post_type TEXT,
  post_time INT,
  post_votes INT,
  -- post_comments_count INT,
  -- comments TEXT NOT NULL,
  subreddit_id INT REFERENCES subreddits(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  comment_body TEXT,
  post_id INT REFERENCES posts(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE up_down_votes (
  id SERIAL PRIMARY KEY,
  initial_count INT,
  -- vote_type BOOL DEFAULT false,
  post_id INT NOT NULL REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE subreddit_posts (
  id SERIAL PRIMARY KEY,
  post_id INT REFERENCES posts(id) ON DELETE SET NULL,
  subreddit_id INT REFERENCES subreddits(id) ON DELETE CASCADE
);

CREATE TABLE user_subreddits_subscriptions (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE SET NULL,
  subreddit_id INT REFERENCES subreddits(id) ON DELETE CASCADE
);
