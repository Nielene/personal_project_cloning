# Component Hierarchy

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
