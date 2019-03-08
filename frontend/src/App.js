import React, { Component } from 'react';
import './css/App.css';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { NavBar } from "./components/NavBar";

import SignUpForm from './components/users/SignUpForm';
import LoginForm from './components/users/LoginForm';
import Posts from './components/posts/Posts';
import PostFormText from './components/posts/PostFormText';
import PostFormLink from './components/posts/PostFormLink';
import SinglePost from './components/posts/SinglePost';
import SingleUserPosts from './components/posts/SingleUserPosts';

import SingleSubredditPosts from './components/subreddits/SingleSubredditPosts';
import Subreddits from './components/subreddits/Subreddits';

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
            <Route path="/users/signup" render={ (props) => <SignUpForm {...props} /> } />
            <Route path="/users/login" render={ (props) => <LoginForm {...props} /> } />

            <Route path="/submitText" render={ (props) => <PostFormText {...props} /> } />
            <Route path="/submitLink" render={ (props) => <PostFormLink {...props} /> } />
            <Route exact path="/" render={ (props) => <Posts {...props}/>} />
            <Route exact path="/subreddits" render={ (props) => <Subreddits {...props} /> } />
            <Route exact path='/post/:id' render={(props)=><SinglePost {...props} /> } />
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
