import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';

import { Route, Switch } from 'react-router-dom';

import Posts from './components/Posts';
import PostFormText from './components/PostFormText';
// import PostFormLink from './components/PostFormLink';

import store from './store'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <Switch>
            <Route path="/submit" component={PostFormText} />
            <Route path="/" component={Posts} />
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
