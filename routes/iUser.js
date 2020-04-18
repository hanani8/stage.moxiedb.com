const express = require('express');
const authenticatedRouteU = express.Router();
const CognitoExpress = require("cognito-express");
const Role = require('../models/roleModel');

const cognitoExpress = new CognitoExpress({
    region: "us-east-2",
    cognitoUserPoolId: "us-east-2_bM76EZtTH",
    tokenUse: "id", //Possible Values: access | id
    tokenExpiration: 3600000 //Up to default expiration of 1 hour (3600000 ms)
});

authenticatedRouteU.use(function (req, res, next) {

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
        console.log(response['cognito:username']);
        next();
    });
});

authenticatedRouteU.get('/products', (req,res) => {
    const name = res.locals.user['cognito:username'];
    Role.findOne({"name":name}, (err,data) => {
        res.json(data.products);
    }).catch(err => console.log(err))
})

authenticatedRouteU.get('/roles', (req,res) => {
    const name = res.locals.user['cognito:username'];
    var responseData;
    Role.findOne({"name":name}, (err,data) => {
        if(err) console.log(err);
        res.json(data.users);
    }).catch(err => console.log(err))
})

module.exports = authenticatedRouteU;