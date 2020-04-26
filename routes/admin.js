const express = require('express');
const authenticatedRouteA = express.Router();
const SubscriberOrg = require('../models/subscriberOrgModel');
const CognitoExpress = require("cognito-express");
const CustomerOrg = require('../models/extOrg');
const Role = require('../models/roleModel');


const cognitoExpress = new CognitoExpress({
    region: "us-east-2",
    cognitoUserPoolId: "us-east-2_hKGBBXcu3",
    tokenUse: "id", //Possible Values: access | id
    tokenExpiration: 3600000 //Up to default expiration of 1 hour (3600000 ms)
});



//Our middleware that authenticates all APIs under our 'authenticatedRoute' Router
authenticatedRouteA.use(function (req, res, next) {
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






authenticatedRouteA.get('/products', async (req, res) => {

    const name = await res.locals.user['cognito:username'];
    if (res.locals.user['custom:role'] == 'admin') {
        SubscriberOrg.findOne({ "Admin.name": name }, (err, data) => {
            res.json(data.products);
        })
    } else
        return false
    // console.log(req.headers.authorization)
    // console.log(res.locals.user)
    console.log(res.locals.user['custom:role'])
})

authenticatedRouteA.post('/addCustomerOrg', (req, res) => {
    let formdata = req.body;
    var name = res.locals.user['cognito:username'];
    formdata.Admin = name;
    SubscriberOrg.findOne({ "Admin.name": name }, (err, data) => {
        formdata.customerOf = data.name;
    }).then(function addCustomer() {
        var customerOrg = new CustomerOrg(formdata);
        customerOrg.save().then(console.log("Data is saved")).catch(err => console.log(err));
        res.status(201).send(customerOrg);
    }).catch(err => console.log(err))


})

authenticatedRouteA.get('/customerOrgs', (req, res) => {
    var name = res.locals.user['cognito:username'];
    if (res.locals.user['custom:role'] == 'admin') {
        CustomerOrg.find({ "Admin": name }, (err, data) => {
            res.json(data);
        }).catch(err => console.log(err))
    }
})


authenticatedRouteA.put('/customerOrgs', (req, res) => {
    if (res.locals.user['custom:role'] == 'admin') {

        CustomerOrg.findById(req.body._id, (err, data) => {
            if (err) return console.log(err);
            console.log(data.name)
            console.log(data.products)
            console.log(req.body)

            data.products = req.body.products;
            data.name = req.body.name

            data.save().catch(err => console.log(err));
            res.status(201).send(data);

        });
    }
});

authenticatedRouteA.delete('/customerOrgs/:id', (req, res) => {
    if (res.locals.user['custom:role'] == 'admin') {
        var id = req.params.id
        CustomerOrg.findByIdAndDelete(id, (err, data) => {
            res.status(200).json({ data })
        }).catch(err => console.log(err))
    }
})

authenticatedRouteA.get('/customerOrgsForAddRole', (req, res) => {
    var name = res.locals.user['cognito:username'];
    if (res.locals.user['custom:role'] == 'admin') {
        CustomerOrg.find({ "Admin": name }, (err, data) => {
            res.json(data);
        }).catch(err => console.log(err))
    }
})

authenticatedRouteA.get('/customerOrgForAddRole', (req, res) => {
    var name = res.locals.user['cognito:username'];
    if (res.locals.user['custom:role'] == 'admin') {
        SubscriberOrg.findOne({ "Admin.name": name }, (err, data) => {
            res.json(data.name);
        }).catch(err => console.log(err))
    }
})

authenticatedRouteA.post('/addRole', (req, res) => {
    var name = res.locals.user['cognito:username'];
    if (res.locals.user['custom:role'] == 'admin') {
        req.body.Admin = name;
        const role = new Role(req.body);
        role.save().then(console.log("Data is saved")).catch(err => console.log(err));
        res.status(201).send(role);
    }
})



authenticatedRouteA.get('/addRoleProducts', (req, res) => {
    var name = res.locals.user['cognito:username'];
    if (res.locals.user['custom:role'] == 'admin') {
        SubscriberOrg.findOne({ "Admin.name": name }, (err, data) => {
            res.json(data.products);
        }).catch(err => console.log(err))
    }
})

authenticatedRouteA.get('/roles', (req, res) => {
    var name = res.locals.user['cognito:username'];
    if (res.locals.user['custom:role'] == 'admin') {
        Role.find({ "Admin": name }, (err, data) => {
            res.json(data);
        }).catch(err => console.log(err));
    }
})


authenticatedRouteA.put('/roles', (req, res) => {
    if (res.locals.user['custom:role'] == 'admin') {


        Role.findById(req.body._id, (err, data) => {
            if (err) return console.log(err);

            let User = req.body.users
            for (i = 0; i < User.length; i++) {
                data.users.push(User[i])
            }
            data.products = req.body.products
            data.department = req.body.department;
            data.designation = req.body.designation;
            data.phone = req.body.phone;
            data.employeeID = req.body.emp;
            data.phone = req.body.phone;

            data.save().catch(err => console.log(err));
            res.status(201).send(data);

        });
    }
});



authenticatedRouteA.delete('/roles/:id', (req, res) => {
    if (res.locals.user['custom:role'] == 'admin') {
        var id = req.params.id
        Role.findByIdAndDelete(id, (err, data) => {
            res.status(200).json({ data })
        }).catch(err => console.log(err))
    }
})

authenticatedRouteA.get('/accesscontrolusers', (req, res) => {
    var name = res.locals.user['cognito:username'];
    if (res.locals.user['custom:role'] == 'admin') {
        Role.find({ $and: [{ "role": 'iuser' }, { "Admin": name }] }, (err, data) => {
            res.json(data);
        }).catch(err => console.log(err))
    }
})






module.exports = authenticatedRouteA;