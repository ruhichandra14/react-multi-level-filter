const express = require('express');
const app = express();
const port = 5002;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.post('/auth', function (req, res) {

const validUserCredentials = { "username": "ruhi", "password": "ruhi"};

req.on('data', function (data) {
    console.log("received username/password details from client!");
    const receivedUserCredentials = JSON.parse(data.toString());
    if(receivedUserCredentials.username == validUserCredentials.username && receivedUserCredentials.password == validUserCredentials.password){
      res.send("welcome!");
    }
    else{
      res.send("please enter correct credentials");
    }
  });
});

app.listen(port, () => console.log(`app is listening on port... ${port}!`))


