Redux Crash Course With React

Traversy Media

https://www.youtube.com/watch?v=93p3LxR9xfM&t=

(after 0_main_README.md):

to install the redux things:
- stop the frontend server from running.
- npm install redux react-redux redux-thunk


so, install these three (3) things:
- react-redux = (the library that binds them together)
- redux can be used on its own or with other frameworks, not just react. (24:22/1:09:22)
- redux-thunk = middleware for redux; allows to directly access the dispatch method, so can make asynchronous calls from our actions.


now:
- bring in the Provider: a react component: the glue for react and redux;
- put it in Main App file.
- and it is from the react-redux library;
- the Provider takes the store and the store holds the state;
- if react script is not recognized, just run npm install again.


- he sain GREAT THINGS HERE.
//   const store = createStore(() => [], {}, applyMiddleware());    //
- createStore and ApplyMiddleware are both part of redux, so have to import it. (28:55);

- should be able to run. (npm start)

- he makes a file called 'store.js' and moves his createStore stuff into it. and import it in their place (line 9);
- also in store: import 'thunk'

- get rootReducer is not defined bc we haven't created it yet.
- make a folder in our source (src) called reducers;

- rootReducer going inside a file called index.js, so can import it into our store.

(33:44)

- make 'actions' folder in src;
- then types.js in actions; - defining a couple constants; and have to export them; - import it (types.js constants) into postReducer

- also in postReducer, want to have our initial state. will have an items array. (36:33)
- items: [] - the posts that come in from our action and our action is where we are putting the fetch request;
- item: {} - the single post that we add when we get the response back.
- need a function. evaluates what type we are dealing with.
- function takes in a state and an action (action has a type, which we are dealing with (via Switch statement))
- action is an object with: action.type (key; and is FETCH_POSTS, AND NEW_POST) and, if it has data, then an action.data (key/value) , then it will also have a payload.
- the default of action.type is to return te current state.

now:
inside actions folder, will make postActions.js

  - postActions:
//payload: now go to postReducer: action.payload refers to this 'payload';
//type: the mandatory 'type' is also being evaluated in the switch conditional statement in postReducer

  - postReducer:
// action.type and action.payload both came from postActions.
// now, need to implement this in the Post component.

  - Post component:
//things need to do here to actually get the posts from the store.
1. import {connect}
- comes from react-redux library (like {Provider} ).
- the {Provider} we brought in from the react-redux library, {connect} also comes from that as well.
- { connect } does just that. it connects your components to your redux store that was provided by your { Provider } component.
- also want to bring in an action: fetchPosts function form postActions.
- in order to connect our component to the redux store, instead of just 'export defaulting it (Posts)', we have to export 'default connect' and put two sets of parentheses:
1st one: map our state to our properties.
  - 1st: 'null' for now. dealing with it later.
  - 2nd parameter: map fetchPosts function.
2nd one: Posts

- Re: fetchPosts just calls the fetch request, just as we were doing with the componentDidMount;
- fetchPosts will be placed into a prop inside the componentDidMount (that was emptied earlier).

   - Posts:
- fetchPosts (line 29) should be getting called to the action fetchPosts;

      - postActions:
- right before the axios call, do a console.lgo('fetching');
- in the inspector, before anything, you'll see 'fetching'. so, it is, in fact, calling that action.
- when that action is called, what it is doing is fetching and 'then' 'dispatching' the 'type' and the 'payload' to the reducer.
- so , let's see if that's being called;


  - postReducer:
- in teh switch statement, in the case of 'FETCH_POSTS' , let's see if that's being called;
- console.log('reducer')

- it's returning the state with the items tha are being called.
- we need to get the items from the state using a thing called 'mapStateToProps';
- so can get state from redux and map it to properties ofth e component; and then we can use that inside of our component.
- so, in Posts.js, make mapStateToProps (function) in Posts.js (48:xx/1:09:22)


    - Posts.js
mapStateToProps is a funciton that takes in a 'state' variable, and returns an object => {posts: and set it to state.posts}.

- it is called state.posts bc in our index.js rootReducer, that's what we set the postReducer to => posts: postReducer

- what do we set to state? we want the items. (postReducer).
- so, we say state.posts.items (Posts.js)

    - Posts.js
- we should now have a this.props.posts bc we mapped the items from the state to the post property.
- so, change
'const postItems = this.state.posts.map(post => ( '
to:
'const postItems = this.props.posts.map(post => ( '
(50:03
- pass mapStateToProps in teh export default.

(50:50)
everything should be showing on the browser again.
our posts are coming in from our redux state.

  - Posts.js
- add our props to our prop types. in react.
- import PropTypes from 'prop-types';
- lower down, say: Posts.propTypes = {an object}
- the fetch posts function is actually a property;
- can set it (fetchPosts) to (:) PropTypes....it is a function, so (.func) and say (.isRequired) as well.
- we also have our posts property, bc we had mapped the items in the state to the post property.
- so, 'posts: PropTypes.array (bc remember it is an array) and (.isRequired)'

//
