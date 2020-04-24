const express = require('express');
const authenticatedRouteR = express.Router();
const Request = require('../models/requestModel')
const CognitoExpress = require("cognito-express");

const cognitoExpress = new CognitoExpress({
  region: "us-east-2",
  cognitoUserPoolId: "us-east-2_bM76EZtTH",
  tokenUse: "id", //Possible Values: access | id
  tokenExpiration: 3600000 //Up to default expiration of 1 hour (3600000 ms)
});



//Our middleware that authenticates all APIs under our 'authenticatedRoute' Router
authenticatedRouteR.use(function (req, res, next) {
  let token = req.headers.authorization;
  let accessTokenFromClient = token.substring(7);
  // console.log(token)
  //I'm passing in the access token in header under key accessToken
  //Fail if token not present in header. 
  if (!accessTokenFromClient) return res.status(401).send("Access Token missing from header");
  cognitoExpress.validate(accessTokenFromClient, function (err, response) {

    //If API is not authenticated, Return 401 with error message. 
    if (err) return res.status(401).send(err);

    //Else API has been authenticated. Proceed.
    res.locals.user = response;
    console.log(response['custom:role'])
    next();
  });
});


authenticatedRouteR.post('/', (req, res) => {
  const name = res.locals.user['cognito:username']
  if (res.locals.user['custom:role'] == 'iuser') {
    var request = new Request(req.body);
    request.requesterName = name
    console.log(request);
    request.save().catch(err => console.log(err));
  }
})


authenticatedRouteR.get('/', (req, res) => {
  const name = res.locals.user['cognito:username']
  if (res.locals.user['custom:role'] == 'iuser') {
    Request.find({"respondentName":name}, (err, data) => {
      res.json({ data });
    }).catch(err => console.log(err));
  }
});



authenticatedRouteR.get('/:id', (req, res) => {
  if (res.locals.user['custom:role'] == 'iuser') {
    var id = req.params.id;
    Request.findById(id, function (err, data) {
      res.json(data)
    }).catch(err => console.log(err))
  }
})


authenticatedRouteR.post('/:id', (req, res) => {
  if (res.locals.user['custom:role'] == 'iuser') {
    let comment = req.body.Comment;
    let id = req.params.id;
    console.log(id);
    Request.findByIdAndUpdate(id, { $push: { allComments: comment } }, function (err, data) {
      if (err) { console.log("Something went wrong") }
      else {
        console.log("seems okay for now");
      }
    });
  }
})

authenticatedRouteR.post('/:id/upload', (req,res) => {
  if (res.locals.user['custom:role'] == 'iuser') {
    let filename = req.body.File;
    let id = req.params.id;
    Request.findByIdAndUpdate(id, { $push: { uploads: filename}}, function(err,data) {
      if(err) { console.log("Something went wrong")}
        else {
          console.log("upload seems okay for now")
        }
    })
  }
})

authenticatedRouteR.get('/comments/:id', (req, res) => {
  if (res.locals.user['custom:role'] == 'iuser') {
    var id = req.params.id;
    Request.findById(id, function (err, data) {
      if (err) { console.log(err) }
      res.json(data.allComments);

    })
  }
})

authenticatedRouteR.post('/requestStatus/:id', (req, res) => {
  if (res.locals.user['custom:role'] == 'iuser') {

    let id = req.params.id;
    let updatedRequestStatus = req.body.requestStatus;
    console.log(req.body);
    Request.findByIdAndUpdate(id, { requestStatus: updatedRequestStatus }, function (err, data) {
      console.log(data);
      console.log(id);
      console.log(updatedRequestStatus);
      if (err) {
        console.log("Something went wrong")
      } else {
        console.log("Seems requestStatus okay for now");
      }
    })
  }
})







module.exports = authenticatedRouteR;