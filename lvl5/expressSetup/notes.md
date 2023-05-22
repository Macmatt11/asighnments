express setup (javascript node module package to create servers )

-website is https://expressjs.com/ 

-install express https://expressjs.com/en/starter/installing.html


1. npm init -y  installs the package.json ( in package.json its common practice to change "main": from index.js to server.js)

2. install dependency if not using express otherwise to install express do: npm install express   this needs to be in the project make sure you ar cd into the correct folder.

3. add server.js file 

4. import express const express = require('express')

5. //declare server variable (good convention is to call it app)
const app = express() //express is given to us in a form like a function and we need to call that function. thats why () are added to express. this will return all the parts it needs to be a server. now app has every thing it needs to be a server 

6. add a listen event --> //servers listen to requests and send a response. so we need to tell the server to always be listening. this is done by adding the following to the bottom to the bottom of the server file:
app.listen(9000,()=>{
    console.log('The server is running on port 9000')
})// listen() needs two arguments 1. port 2. callback function (fires when the port is work. it lets us know our port is operational)

7. start server file with node server.js or whatever the file name is 
to stop server in terminal press ctrl c

***this is the bare minimum for a server*** 

key terms 

# port: run process run servers and run programs. we will be running server on a local port. our machinse is referred to as localhost
* localhost: 9000/ this hits my server running on local port 9000. 
avoid using a number 3000 and below as well as 9000 and above 

# route - handle specific endpoints. an event listener for http requests like get, post, put and delete 

* endpoint - "/item" or "/user" ex of endpoints. part of the url. we would be listening for requests at "/item".
typically at the end of the port so 
* localhost:9000/item or * localhost:9000/user <--- thats the endpoint 

install Nodemon 
-makes so that we dont have to stop and restart server manually whenever we change the endpoint (-g means this will be install globally inside of computer so it needs to be installed once )

npm install -g nodemon NOW --> instead of node server.js to start server we do nodemon server.js

more terms:
# middleware - a function that fires on the in between. get request is an example. we can setup a middleware that fires on every request.

# request body (req.body)-something user sending in body of request and parse into json. 

-//middleware (for every request)
app.use("/",express.json)//looks for a request body and turns it into req.body
tow paremeters the path "/" and the parse to json. path is optional and to run on every request we do app.use(express.json)

# uuid - creates fake ids while we create databases without mongoose. npm install uuid

# url parts
  # base url: http://amazon.com
  # endpoints: http://amazon.com/images (gets all images ) 
  # parameters: http://amazon.com/images/ 7688089gf9 (one specific image chosen by id) 
  # query string: typically used to filter results 
    -begins with the "?"
    -built of key = value pairs
    -multiple queries seperated by the "&" 

# solving bugs morgan - use morgan to assist with error handling. to install morgan (which is installed on every project ) you'll need to  npm install morgan and then import it with 

- mongoose:
npm install mongoose (per project installation) -gives v7 or most up to date 
npm i mongoose@6.10.3 - gives v6 
-purpose:
  -create models
  -query data 

  # mongoose schema : blueprint to data base 
  # mongoose models: 
  - models have a name and a blueprint(schema) 
  - models are used to perform the CRUD operations on data created w/the model 
  https://mongoosejs.com/docs/schematypes.html
  