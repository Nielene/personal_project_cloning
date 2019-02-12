https://canvas.instructure.com/courses/1433043/assignments/10673507/submissions/23136987

I love the detail and thoroughness of your proposal Nielene! It's always good to document your ideas and thoughts, it will help you clear your mind and see the bigger picture.

A couple of points regarding your project proposal:

* MVP => Really liked your MVP thorough description and points. I see that for most of them you had the end user in mind, which is great!. MVPs are done and described from the user perspective. A suggestion here will be to order this list from "Important" to "Least Important" and maybe even think of moving some of the least important as well as all the stuff you marked "extra" or "not important" to a "Bonus Features (TBD)" section. Also, see if some are dependant on others or if they are "sub-features" and prioritize.

* DB Schema => Looks good. The upvotes/downvotes table would have an id for each upvote/downvote you got that. We also need to associate that with a post so a "post_id" foreign key would be good, and maybe a "type" that would be either "upvote" or "downvote" too?. Also, I'm not sure I see the point for a user/post joined table? Since the posts have a "user_id" foreign key that already makes the connection between the post and its author. I think you could skip thinking of moderators for subreddits for now. Good job here in general!  

* API Endpoints => All good here, nice you included the request METHOD and a brief description of what the endpoint will do.

* React Component Structure => I see you were a bit confused about what to do for this point. This is actually tightly coupled with the wireframing since. What you could do is to grab your wireframes and start drawing and labeling boxes around stuff you think should be a component, which will give you the names for your components as well as the hierarchy. Once you have that, it will be just a matter of documenting your components in a textual fashion here, saying whose the parent or child of whom and what are their responsibilities.

* Example State => Good, maybe comments will be a list of some sort since you know you will have multiple comments on a post. Also, think about the properties of these objects and how they should correlate to your table's columns.

* Wireframes => Good, you have the main page of your app wireframed. I think it could be complemented with that I mentioned above in React Component Structure.

* Implementation Timeline/Schedule => You have a good general idea, a bit more specificity would be appreciated. Here you want to think about the features of your MVP and how long they will take you to implement for instance.
  Weeks/Phases:
  1) front-end functionality and style for writing and saving a new post. etc.
  2) back-end and database setup to persist a post. etc.
The more you break down these and time-budget them the better. Take the goal for week 1 and break it down even more. also, these are generally described from the developer perspective (Because this is relevant to you, the developer, so you want to talk about how long implementation details are going to take) and not the user perspective (compare to MVP).

* Let's create a Trello board https://trello.com/ to help us manage this project. Invite your mentor to it so that they can help and give you feedback there. Look at mine for my most current project for a reference if you need to https://trello.com/b/VcQgZhci/foobar. I hope your App will not have as many bugs as mine :laughing_emoji:

Ideally, you will have a main README.md file at the root of your docs that highlights the main points of your proposal and links to the specifics in the way Reed did here: https://github.com/crymall/ok_corral/tree/master/docs. This will make the experience of whoever is checking out your project a bit better than having to search for docs in your repo.

Again I like your thoroughness a lot, you just need to filter and prioritize a bit so that you actually make use of so much information and notes. I think trello is going to help you with that.

Reach out to your mentor if you need any help or me if any of this is confusing or not clear.

Good job!
Alejandro Franco , Feb 11 at 1:27pm
