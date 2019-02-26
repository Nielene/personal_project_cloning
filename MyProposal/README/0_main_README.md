Ideally, you will have a main README.md file at the root of your docs that highlights the main points of your proposal and links to the specifics in the way Reed did here: https://github.com/crymall/ok_corral/tree/master/docs. This will make the experience of whoever is checking out your project a bit better than having to search for docs in your repo.


Home
- list of categories/subreddit links

    choose a subreddit:

Subreddit pate:
- list of posts

    choose a post:

Post page:
- list of comments.


Extra features:
- add votes
- improve karma
- a subreddit creator can choose their own background image/color from a display (inline flex) list. click on the image picture displayed in the Image section and that will be the new background-image.
or in the Color section, click on the color and that is the new background-color.
there must be an npm for background imagery (like faker)
  - see redux_1 notes from 0207 RandomColor.js
  - make an AXIOS call for it sometime later using FAKER! :(). not in the seed file. IMG_URL .

1. cd into personal_project/backend/db
1. psql -f re_reddit.sql
2. new tab and cd into db
2. node seed.js
3. new tab and cd backend
3. nodemon bin/www
4. cd frontend
4. npm start

3 backend terminal tabs:
1. backend/db : psql -f re_reddit.sql
2. backend/db : node seed.js
3. backend : nodemon bin/www


used:
frontend : npm install --save axios

(see Traversy_Media_redux.md)





//==========================

ToDo:
1. PostForm: need to give id to new Post being added.
2. 500 error if no Body text is given in the form in the browser.
