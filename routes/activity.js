const express = require('express');
const authenticatedRouteIX = express.Router();
const activity = require('../models/newActivity')


authenticatedRouteIX.get('/', (req, res) => {
    activity.find({}, (err, data) => {
        res.json( data );
        console.log(data)
    }).catch(err => console.log(err));

});



// const hanani = new activity({
//     respondentName : "new user"
//  })
//  hanani.save()

authenticatedRouteIX.post('/', (req, res) => {
    // data.respondentName = "";
    // data.name = req.body.name

    // data.save().catch(err => console.log(err));
    // res.status(201).send(data);
});


module.exports = authenticatedRouteIX;
