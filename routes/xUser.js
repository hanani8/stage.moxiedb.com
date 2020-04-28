const express = require('express');
const authenticatedRouteX = express.Router();
const CognitoExpress = require("cognito-express");
const Role = require('../models/roleModel');
const CustomerOrg = require('../models/extOrg');

const cognitoExpress = new CognitoExpress({
    region: "us-east-2",
    cognitoUserPoolId: "us-east-2_oHX7Q4Vbo",
    tokenUse: "id", //Possible Values: access | id
    tokenExpiration: 3600000 //Up to default expiration of 1 hour (3600000 ms)
});

authenticatedRouteX.use(function (req, res, next) {
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

authenticatedRouteX.get('/products', (req, res) => {
    const name = res.locals.user['cognito:username'];
    let organization = null;
    Role.findOne({ "name": name }, (err, data) => {
        if (err) return console.log(err);
        organization = (data.organization);
    }).then(() => {
        CustomerOrg.findOne({ "name": `${organization}` }, (err, data) => {
            if (err) return console.log(err);
            res.json(data.products);
        })
    }).catch(err => console.log(err))
})

authenticatedRouteX.get('/roles', (req, res) => {
    const name = res.locals.user['cognito:username'];
    var responseData;
    Role.findOne({ "name": name }, (err, data) => {
        if (err) return console.log(err);
        res.json(data.users);
        console.log(data.name)
    }).catch(err => console.log(err))
})

authenticatedRouteX.get('/roles/respondent/:respondent', (req, res) => {
    const name = req.params.respondent
    console.log(name)
    Role.findOne({ "name": name }, (err, data) => {
        if (err) return console.log(err);
        res.json(data);
    }).catch(err => console.log(err))
})

module.exports = authenticatedRouteX;