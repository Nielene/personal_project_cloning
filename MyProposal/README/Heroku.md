a dino - a virtual machine. a computer in heruku's cloud. set up your express server. set up your heroku app.

a dino = a container.
1. a number of cumberters.
2. an os.
3. a computer ...
4. reguler computer

edit app to work on heroku.
1. merge the two front and back apps as one. bc heroku only allows you to put up only one app.

heroku cli - command line interface.

brew: brew tap heroku/brew....
npm: **npm install -g heroku**

g : global anywhere install it and it will wrk.

**which heroku**
see path:  /usr/local/bin/heroku


**heroku -v**
see: heroku/7.22.1 darwin-x64 node-v10.11.0

https://signup.heroku.com/
nielenethomas@pursuit.org
hobbyist
node.js
company: N/A
Pw: f#1  (no r)


terminal:
heroku login

**heroku apps** - terminal
- know how many apps i have.
- or can do it in the CLI interface.

not need to memorise all commands: heroku -h | less

heroku create -h  - not allowed
man heroku - no as well

**heroku create NAME OF APP** - needs to be unique.
my-re-reddit
https://git.heroku.com/my-re-reddit.git

cd MY APP
git remote -v
:
Nielenes-MacBook-Air:personal_project nielenethomas$ git remote -v
heroku	https://git.heroku.com/my-re-reddit.git (fetch)
heroku	https://git.heroku.com/my-re-reddit.git (push)
origin	https://github.com/Nielene/personal_project_cloning.git (fetch)
origin	https://github.com/Nielene/personal_project_cloning.git (push)
:
**heroku create**  (inside app) - if dont put a name will create one for you
:
Nielenes-MacBook-Air:personal_project nielenethomas$ heroku create
Creating app... done, ⬢ aqueous-forest-43778
https://aqueous-forest-43778.herokuapp.com/ | https://git.heroku.com/aqueous-forest-43778.git
:

Nielenes-MacBook-Air:personal_project nielenethomas$ git remote -v
heroku	https://git.heroku.com/my-re-reddit.git (fetch)
heroku	https://git.heroku.com/my-re-reddit.git (push)
origin	https://github.com/Nielene/personal_project_cloning.git (fetch)
origin	https://github.com/Nielene/personal_project_cloning.git (push)
Nielenes-MacBook-Air:personal_project nielenethomas$

:
Nielenes-MacBook-Air:personal_project nielenethomas$ heroku apps
=== nielenethomas@pursuit.org Apps
aqueous-forest-43778
my-re-reddit
:


git push heroku master
ls
: frontend  backend
pwd

create a package.json (so heroku will know )
**git ....**
npm init --yes

now a package.json is here:

personal_project:
- frtontend
- backend
- package.json

run the start command insid emy package.json:
package.json -> {scripts} -> abc start
"scripts": {
  "start": ""
}

if nin personal_project root folder:
start backend:
"start": "nodemon ./bin/www" - so use that.

nodemon backend/bin/www   - nodemon needs to install clobally. Or:
cd Backend
npm start

install node modules in backend: npm install

cd ../frontend
nmp i


can also run backend with node:
node ./backend/bin/www

... see website(?) welcome messsge in backend somewhere.
... in browser, type: ...  localhost:3001

in package.json made:

scrips:
- start: "node backend/bin/www"

verify in root: ls
: backedn fronend package.js  ...


documents: heroku build scripts.
- lecture notes:

scrips:
- "start": "node backend/bin/www",
- "heroku-postbuild": "cd backend && npm install && cd ../frontend && npm install"

(what to do "before" : "and after")
//


AS LONG AS YOU DONT HAVE MORE THAN 10,000 (LINES?) ON ..., IT IS FREE
