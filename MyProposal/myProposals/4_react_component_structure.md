# Component Hierarchy

**Nav (folder)**
-  Navbar (components)

**Home**
- TopicList (subreddits)

**Feed/List of Posts**
- Posts
- Comments

**Profile**
- My Post

**User Auth (Login)**
- Login
- Register

//============================== OR ==============================

**Nav (folder)**
-  Navbar (components)

**Home**
- TopicList (select tag with subreddits options) at top of page => *Feed/List of Posts*
- list of random Posts from various subreddits => *Single Post page*

**Feed/List of Posts**  (belonging to single subreddit page)
- Posts

**Single Post page**
- Post
- comment input box
- all Comments

**Profile**
- My Post

**User Auth (Login)**
- Login
- Register


//============================ Discards: ==============================


**Homepage**
* NavBar
* Posts
* selection bar with subreddit options

**PostIndex**
* PostIndexItem
* PostSearchForm
* NavBar

**PostDetailContainer**
* PostDetail

**PostDetailContainer**
* PostDetail

**PostDetail**
* PostIndex
* PostSubmitForm

**UserIndex**
* UserIndexItem

**CommentIndexContainer**
* CommentIndex
* CommentForm
* NavBar

**CommentIndex**
* CommentIndexItem

# Routes

| **Path**  | **Component** |
| ------------- | ------------- |
| '/'  | 'Homepage'  |
| '/posts'  | 'UserIndex'  |
| '/posts/:postId'  | 'PostDetailContainer'  |
| '/comments'  | 'CommentIndex'  |
| 'CommentDetailContainer'  |


//============================= First Review: ============================
* React Component Structure => I see you were a bit confused about what to do for this point. This is actually tightly coupled with the wireframing since. What you could do is to grab your wireframes and start drawing and labeling boxes around stuff you think should be a component, which will give you the names for your components as well as the hierarchy. Once you have that, it will be just a matter of documenting your components in a textual fashion here, saying whose the parent or child of whom and what are their responsibilities.
