Node.js -> Runtime environment that executes JavaScript code oustide of a browser (for ex: Node.js allows us to run our code in Visual Studio Code)

//To install any javaScript package 
npm install package

for ex: to install Mocha test framework

npm install mocha 

To install dev dependency

npm install <packageName> --save-dev

for ex:  npm install chai --save-dev

Note: dev dependencies will be added under dev dependencies in the package.json file 

'chai' is the assertion library

//When we clone a project into a new machine or  to install all dependencies available in the package.json file, run command:

npm install 

//To keep track of JavaScript packages installed use package.json
npn init -> initializes and creates a package.json file 
or npm init -y ->with default values 

//To run a script 
1. Create a script in package.json
"scripts": {
    "test": "node ba-Practice"
  },

//Note script name could be any name 
2. Run below command in terminal
npm run test

//NPX -> Node package runner
To run npm commands without installing it locally 



