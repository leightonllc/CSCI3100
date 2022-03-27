const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// get a list of all courses
recordRoutes.route("/course").get(function (req, res) {
  let db_connect = dbo.getDb("cute");
  db_connect
    .collection("Course")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// get a single user profile by id
recordRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb("cute");
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("User")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// login validation
/*recordRoutes.route("/login").post(function(req, res) {
  let db_connect = dbo.getDb("cute");
  let {username, password} = req.body;
  if (!username || !password) {
    res.json({ code: 500, msg: 'Parameter cannot be empty' });
  }
  var find_user = db_connect.collection("User").findOne({ username }, 
    (err, result) => {
      if (err)
        throw err;
      res.json(result);
    });
  if (find_user) {
    var find_password = db_connect.collection("User").findOne({ password }, 
      (err, result) => {
      if (err) throw err;
      res.json(result);
    });
    if (find_password) {
      res.json({ code: 200, msg: 'success', data: find_user });
    } else {
      res.json({ code: 500, msg: 'Wrong password' });
    }
  } else {
    res.json({ code: 500, msg: 'User not found' });
  }
});

// create a new user
recordRoutes.route("/user/add").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myobj = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    propic: req.body.propic,
    description: req.body.description,
    role: "user"
  };
  db_connect.collection("User").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// update a user profile by id
recordRoutes.route("/userupdate/:id").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      username: req.body.username,
      propic: req.body.propic,
      description: req.body.description,
    },
  };
  db_connect
    .collection("User")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 user updated");
      response.json(res);
    });
});

/*
// This section will help you get a list of all the records.
recordRoutes.route("/course").get(function (req, res) {
  let db_connect = dbo.getDb("cute");
  db_connect
    .collection("Course")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb("cute");
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("records")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myobj = {
    name: req.body.person_name,
    position: req.body.person_position,
    level: req.body.person_level,
  };
  db_connect.collection("records").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      person_name: req.body.person_name,
      person_position: req.body.person_position,
      person_level: req.body.person_level,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb("cute");
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});
*/
module.exports = recordRoutes;