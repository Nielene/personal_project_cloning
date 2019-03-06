import React, { Component } from 'react';
import './css/App.css';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { NavBar } from "./components/NavBar";
import Posts from './components/posts/Posts';
import PostFormText from './components/posts/PostFormText';
// import PostFormLink from './components/posts/PostFormLink';
import SinglePost from './components/posts/SinglePost';
import SingleSubredditPosts from './components/subreddits/SingleSubredditPosts';
import SingleUserPosts from './components/posts/SingleUserPosts';
import SingleUserComments from './components/comments/SingleUserComments';
// import PostFormLink from './components/PostFormLink';

import store from './store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/submit" component={PostFormText} />
            <Route exact path="/" render={ (props) => <Posts {...props}/>} />
            <Route exact path='/post/:id' render={(props)=><SinglePost {...props}/>} />
            <Route exact path='/subredditPosts/:subreddit_id' render= {(props) => <SingleSubredditPosts {...props} /> } />
            <Route exact path='/userComments/:user_id' render= {(props) => <SingleUserComments {...props} /> } />
            <Route exact path='/userPosts/:user_id' render= {(props) => <SingleUserPosts {...props} /> } />

          </Switch>


        </div>
      </Provider>
    );
  }
}

export default App;





// <Switch>
//   <Route path = '/posts/new/text' component = {PostFormText} />
//   <Route path = '/posts/new/link' component = {PostFormLink} />
// </Switch>

  // <Posts />
// <PostFormLink />
// <hr />
//
