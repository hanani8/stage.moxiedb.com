const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const path = require('path');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const authenticatedRouteSA = require("./routes/superAdmin");
const authenticatedRouteR = require('./routes/request');
const authenticatedRouteA = require("./routes/admin.js");
const authenticatedRouteU = require("./routes/iUser.js");
const authenticatedRouteX = require('./routes/xUser.js');
const authenticatedRouteXR = require('./routes/xuserRequest.js');
const Request = require('./models/requestModel');

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(process.cwd()+"/frontend/dist/moxiedb"));

dotenv.config();
app.use(cors());
// app.use(cors());

const aws = require('aws-sdk');
const s3  = new aws.S3();
aws.config.update({
      secretAccessKey: 'Bk3UhOP0Okei2Y9kbwQgobpCdlB4hLRtpfjACU+6',
    accessKeyId: 'AKIA4SAVCJANYHGMDTPZ',
    signatureVersion: 'v4',
    region: 'us-east-2' //E.g us-east-1
})
const keys = 'Screenshot from 2020-04-05 20-14-46.png';
const bucket = 'document-upload-tryout';
const signedUrlExpireSeconds = 60;


// mongoose.connect(
//   "mongodb+srv://moxie:moxie@12345@cluster0-pvm3m.mongodb.net/test?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
// const db = mongoose.connection;
// db.on("error", error => console.error(error));
// db.once("open", () => console.log("Database Connected"));




// mongoose.connect(
//   "mongodb+srv://moxie:moxie@12345@cluster0-pvm3m.mongodb.net/test?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
// const db = mongoose.connection;
// db.on("error", error => console.error(error));
// db.once("open", () => console.log("Database Connected"));



var uri = "mongodb://moxie:moxie%4012345@cluster0-shard-00-00-pvm3m.mongodb.net:27017,cluster0-shard-00-01-pvm3m.mongodb.net:27017,cluster0-shard-00-02-pvm3m.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true},function(err, client) {
  console.log("Connected to the database");
});


app.use('/api/superAdmin', authenticatedRouteSA);

app.use('/api/request', authenticatedRouteR);

app.use('/api/admin', authenticatedRouteA);

app.use('/api/iuser', authenticatedRouteU);

app.use('/api/xuser', authenticatedRouteX);

app.use('/api/xrequest', authenticatedRouteXR);

app.get('/api/docURL/:id',function(req,res){
  console.log(req.params);
  let id = req.params.id;
  console.log(id);
  var key = null;
Request.findById(id,function(err, data){
  console.log(data);
  console.log(data.uploads);
  key = data.uploads[0];
  console.log(key);
}).then(function getUrl(){
  const aws = require('aws-sdk');
const s3  = new aws.S3();
aws.config.update({
      secretAccessKey: 'Bk3UhOP0Okei2Y9kbwQgobpCdlB4hLRtpfjACU+6',
    accessKeyId: 'AKIA4SAVCJANYHGMDTPZ',
    signatureVersion: 'v4',
    region: 'us-east-2' //E.g us-east-1
})
const keys = 'Screenshot from 2020-04-05 20-14-46.png';
const bucket = 'document-upload-tryout';
const signedUrlExpireSeconds = 60;
const url = s3.getSignedUrl('getObject', {
  Bucket: bucket,
  Key: key,
  Expires: signedUrlExpireSeconds
})
res.json(url);
}).catch(err => console.log(err))
})

app.get("*", (req, res) => {
  res.sendFile(process.cwd()+"/frontend/dist/moxiedb/index.html");
});


http.createServer(app).listen(process.env.PORT || 3000);
console.log("BackEnd Server Is On=", process.env.PORT || 3000);
