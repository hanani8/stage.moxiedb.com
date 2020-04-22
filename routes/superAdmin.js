const express = require('express');
const authenticatedRouteSA = express.Router();
const Product = require('../models/productModel');
const SubscriberOrg = require('../models/subscriberOrgModel');
const CognitoExpress = require("cognito-express");



const cognitoExpress = new CognitoExpress({
    region: "us-east-2",
    cognitoUserPoolId: "us-east-2_SDqqsNinX",
    tokenUse: "id", //Possible Values: access | id
    tokenExpiration: 3600000 //Up to default expiration of 1 hour (3600000 ms)
});



//Our middleware that authenticates all APIs under our 'authenticatedRoute' Router
authenticatedRouteSA.use(function (req, res, next) {
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



authenticatedRouteSA.post('/products', (req, res) => {
    if (res.locals.user['custom:role'] == 'sadmin') {

        var product = new Product(req.body);
        product.save().catch(err => console.log(err))
        res.status(201).send(product)
    }
    // console.log(product)
})

authenticatedRouteSA.get('/products', (req, res) => {

    if (res.locals.user['custom:role'] == 'sadmin') {
        Product.find({}, (err, data) => {
            if (err) return console.log(err);
            res.json({ data })
        }).catch(err => console.log(err))
    } else
        return false
    // console.log(req.headers.authorization)
    // console.log(res.locals.user)
    console.log(res.locals.user['custom:role'])

})


authenticatedRouteSA.put('/products', (req, res) => {
    if (res.locals.user['custom:role'] == 'sadmin') {

        Product.findById(req.body._id, (err, data) => {
            if (err) return console.log(err);
            data.productName = req.body.name
            data.casNumber = req.body.cas;
            data.productType = req.body.productType;
            data.compositionMolecule = req.body.compositionMolecule;
            data.therapeuticCategory = req.body.therapeuticCategory;
            data.dosageForm = req.body.dosageForm;
            data.ndc = req.body.ndc;
            data.packing = req.body.packing;
            data.save().catch(err => console.log(err));
            res.status(201).send(data);

        });
    }
});

authenticatedRouteSA.delete('/products/:id', (req, res) => {
    if (res.locals.user['custom:role'] == 'sadmin') {
        var id = req.params.id
        Product.findByIdAndDelete(id, (err, data) => {
            if (err) return console.log(err);
            res.status(200).json({ data })
        })
    }
})


authenticatedRouteSA.post('/subscriberOrgs', (req, res) => {
    if (res.locals.user['custom:role'] == 'sadmin') {

        console.log(req.body);
        var subscriberOrg = new SubscriberOrg(req.body);
        subscriberOrg.save().then(console.log("Data is saved"));
        res.status(201).send(subscriberOrg);
    }
})


authenticatedRouteSA.get('/subscriberOrgs', (req, res) => {
    if (res.locals.user['custom:role'] == 'sadmin') {

        SubscriberOrg.find({}, (err, data) => {
            if (err) return console.log(err)
            res.json({ data });

        })
    }
})

authenticatedRouteSA.put('/subscriberOrgs', (req, res) => {
    if (res.locals.user['custom:role'] == 'sadmin') {

        SubscriberOrg.findById(req.body._id, (err, data) => {
            if (err) return console.log(err);
            console.log(data.name)
            console.log(data.products)
            console.log(req.body)

            data.products = req.body.products;
            data.name = req.body.orgName
           
            data.save().catch(err => console.log(err));
            res.status(201).send(data);

        });
    }
});


authenticatedRouteSA.delete('/subscriberOrgs/:id', (req, res) => {
    if (res.locals.user['custom:role'] == 'sadmin') {
        var id = req.params.id
        SubscriberOrg.findByIdAndDelete(id, (err, data) => {
            if (err) return console.log(err);
            res.status(200).json({ data })
        })
    }
})

authenticatedRouteSA.post('/addAdmin', (req, res) => {
    if (res.locals.user['custom:role'] == 'sadmin') {

        const org = req.body.orgName;
        const admin = req.body;
        SubscriberOrg.findOneAndUpdate({ name: org }, { Admin: admin }, function (err, data) {
            if (err) return console.log(err);
            console.log(data)
        })
    }
})


authenticatedRouteSA.delete('/subscriberOrgs/admin/:id', (req, res) => {
    if (res.locals.user['custom:role'] == 'sadmin') {
        var id = req.params.id
        SubscriberOrg.findByIdAndDelete(id, (err, data) => {
            if (err) return console.log(err);
            res.status(200).json({ data })
        })
    }
})


module.exports = authenticatedRouteSA;