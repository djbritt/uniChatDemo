var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http, { pingTimeout: 60000 });
var request = require('request');
const https = require("https");
const utf8 = require('utf8');

var userList = []
var messageList = []
var robot = { "name": "Translator", "pic": "/static/img/bot.png" }
var robotCount = 0

app.get('/', function(req, res) {
  // res.sendFile(__dirname + '/public/index.html');
  res.sendFile(__dirname + '/public/index2.html');
});
app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
  userList.push({ 'sid': socket.id })
  console.log('a user connected');
  console.log("sending down current message list on first connect");
  //send down userList on first connect

  console.log('message length', messageList.length)
  //testing first message
  if (messageList.length > 0) {
    // robotCount++
    // messageList.push({ 'pic': robot.pic, 'name': robot.name, 'message': robotCount.toString() })
    io.emit('allMessages', { "data": messageList });
  }

  //on receiving message
  socket.on('message', function(msg) {
    console.log('in message')
    console.log(msg)
    for (var j in userList) {
      if (userList[j].sid == socket.id) {
        console.log('found user who sent message')
        messageList.push({ "name": userList[j].name, "pic": userList[j].image, "message": msg['data'] });
        io.emit('allMessages', { "data": messageList });
      }
    }
  });

  //on google login token recieved
  socket.on("googleToken", function(googleToken) {
    console.log("inside googleToken")
    for (var i in userList) {
      if (userList[i].sid == socket.id) {
        console.log('found userList')
        console.log(userList[i])
        userList[i].sid = socket.id
        userList[i].name = googleToken.gName;
        userList[i].image = googleToken.gImage;

        console.log("current user is from google with this info")
        console.log(userList[i])

        var removeUndefinedUser = []
        for (var i in userList) {
          if (userList[i].name) {
            removeUndefinedUser.push(userList[i])
          }
        }
        io.emit('userConnection', removeUndefinedUser)
        console.log('all users')
        for (var i in userList) {
          console.log(userList[i])
        }
      }
    }
    // socket.emit emits only to the client that fired the request
    socket.emit('glogin', ['data', '']);
  })

  //on google logout
  socket.on("glogout", function() {
    for (var i in userList) {
      if (userList[i].sid == socket.id) {
        //CANNOT use userList because I do not remove user from userList
        //array when they logout
        console.log("removing user from connected user list")
        console.log("Found user to remove id is - " + userList[i].sid)
        userList[i].image = ''
        userList[i].name = ''
        console.log("Current user list is - ")
        for (var i in userList) {
          console.log(userList[i])
        }
        var removeUndefinedUser = []
        for (var i in userList) {
          if (userList[i].name) {
            removeUndefinedUser.push(userList[i])
          }
        }
        io.emit('userConnection', removeUndefinedUser)

      }
    }
    socket.emit('glogout', ['data', '']);
  })

  //udpate user list on disconnect
  socket.on('disconnect', function() {
    for (var i in userList) {
      if (userList[i].sid == socket.id) {
        console.log("Found user to remove id is - " + userList[i].sid)
        userList.splice(userList[i].sid, 1)
      }
    }
    console.log("someone disconnected")
    //disconnect function, see if it helps removing user in userList

    console.log("Current user list is - ")
    for (var i in userList) {
      console.log(userList[i])
    }

    console.log("------------------------------------")
  })
});

app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});

// handling 404 errors
app.use(function(err, req, res, next) {
  if (err.status !== 404) {
    return next();
  }
  res.send(err.message || '404 Page Not Found');
});

http.listen(process.env.PORT, function() {
  console.log(process.env.IP + ":" + process.env.PORT);
});
