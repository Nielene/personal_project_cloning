focus on the technology rather than the concept (the thing you really care about).
this is like a dry run.

implementing a clone of an existing website.
evernote
pinterest
tumblr
-largely text-based media.

*plan the architecture first.*
constructive plan: starts with ideation. => not over scoping.

minimum viable product. the core of what you need.
- facebook: profile and posts and feed.
- dont try to duplicate every functionality of site.
- discern what the core functionalilty is of the site.
- it is better to whole ass one thing than half ass two things.
- doing the full stack - backend and front end.

what tables do you have.
what columns do you have
..

what info do you want to hold onto and save
how access that info
whta type of info are frequenty requested together?

eg. reed's okcupid:
mvp: messaging. didn't have to be live.
store it in a database and update when the person refreshed the page.
wiht acomment secttion. need a post id, a user id (to attribute comment to user).
if have message spread: 1 to 1 connection btw users: private forum where only tow ppl can post:

he created a table called Threads: had an
- id
- user_1
- user_2       (a huge joined table.)
another table Messages:
- id
- body
- user_id
- thread_id -- from one account, user might have be in diff threads with various other users.
- time stamps

make speculative routing: backend and frontend.
what are the basic boiler plate routes want to set up.


*front end routing:*

*wireframes for those routes.*

-
- user authentication
- deployment



implement vertically:
can implement database seed file fully first.
can show just the list of nodes first.
dont need to set up all the routes in express.
ie. do all the users from tip to toe. so have no loose threads lying around.
do users routes, tehn get to all the way to users functions.

make a schedule.
corey and reed fell behind their schedule on implementing one of his features.


make a repo on my github. linked to trello board: set it to public or share it with them.

not started,  work in progress, finished

crymall / ok_corral
- under docs - in his repo


pinterest
evernote
tumblr
reddit

demo login


//=========================================
