# React + Webpack

Install latest iojs if you're way out of date: 

    https://iojs.org/en/index.html
  
Install gulp globally

    npm install -g gulp
  
Clone this repo

    git clone git@github.com:nktpro/reack.git
    
Initial `npm install`

    cd path/to/reack
    npm install
    
Start up dev server

    gulp dev
    
Then load the app up on Chrome. Afterwards make any changes and simply reload the browser like a boss.

    http://localhost:11111/
    
Build for production (--path argument is optional, default to ./build)

    gulp --path path/to/build
    
All the magics are inside gulpfile.js. Read through and enhance it as you go.


  
