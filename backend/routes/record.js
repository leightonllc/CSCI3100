const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

/*
Done (w/o constraint checking):
get a list of all users
delete a user by username
edit a user by id
create a new user
get a list of all courses
delete a course by course code
edit a course
create a new course
get a list of all forums
delete a forum by id
create a new forum (1 unsolved problem)
edit a forum
get a list of usercourse
delete a usercourse relation
add a usercourse relation (same unsolved problem)
get single usercourse list by user id
get a single user profile by id
get a single course details by course code
update a user profile by id
add forum comments
increase forum vote by 1
get a forum list by a specific course id
get a user list by a specific course id
add course review comment (finish) & update rate (not finish)
login validation
reset password
*/

// ADMIN ACTIONS
// USER
// get a list of all users
recordRoutes.route("/userlist").get(function (req, res) {
  let db_connect = dbo.getDb("cute");
  db_connect
    .collection("User")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// delete a user by username (e.g. /user/student1 )
recordRoutes.route("/userlist/:username").delete((req, response) => {
  let db_connect = dbo.getDb("cute");
  let myquery = { username: req.params.username };
  db_connect.collection("User").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

// edit a user by id (for admin) 
recordRoutes.route("/userlist/:id").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      propic: req.body.propic,
      description: req.body.description,
      role: req.body.role,
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

// create a new user (for both admin and new register)
// new registration is assumed to be role "user" by default, but admin can add admin user additionally
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
  if (req.body.role == "admin") {
    myobj.role = "admin";
  }
  db_connect.collection("User").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// COURSE
// get a list of all courses
recordRoutes.route("/courselist").get(function (req, res) {
  let db_connect = dbo.getDb("cute");
  db_connect
    .collection("Course")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// delete a course by course code (e.g. /user/CSCI3100 )
recordRoutes.route("/courselist/:coursecode").delete((req, response) => {
  let db_connect = dbo.getDb("cute");
  let myquery = { courseCode: req.params.coursecode };
  db_connect.collection("Course").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

// edit a course (for admin) 
recordRoutes.route("/courselist/:id").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      courseCode: req.body.courseCode,
      courseName: req.body.courseName,
      courseDescription: req.body.courseDescription,
      professor: req.body.professor,
      assessment: req.body.assessment,
      comments: req.body.comments,
    },
  };
  db_connect
    .collection("Course")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 course updated");
      response.json(res);
    });
});

// create a new course 
recordRoutes.route("/courselist/add").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myobj = {
    courseCode: req.body.courseCode,
    courseName: req.body.courseName,
    courseDescription: req.body.courseDescription,
    professor: req.body.professor,
    assessment: req.body.assessment,
    rating: 0,
    comments: [""],
  };
  db_connect.collection("Course").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// FORUM
// get a list of all forums
recordRoutes.route("/forumlist").get(function (req, res) {
  let db_connect = dbo.getDb("cute");
  db_connect
    .collection("Forum")
    .aggregate([
      {
        $lookup:
        {
          from: 'Course',
          localField: 'courseid',
          foreignField: '_id',
          as: 'course'
        }
      },
      {
        $lookup:
        {
          from: 'User',
          localField: 'postedBy',
          foreignField: '_id',
          as: 'user'
        }
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$course", 0] }, "$$ROOT"] } }
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$user", 0] }, "$$ROOT"] } }
      },
      { $project: { course: 0, user: 0 } }
    ])
    .toArray(function (err, result) {
      if (err) throw err;
      result.forEach(object => {
        delete object['courseDescription'];
        delete object['courseName'];
        delete object['professor'];
        delete object['assessment'];
        delete object['rating'];
        delete object['comments'];
        delete object['password'];
        delete object['email'];
        delete object['propic'];
        delete object['description'];
        delete object['role'];
      })
      res.json(result);
    });
});

// delete a forum by id (e.g. /user/CSCI3100 )
recordRoutes.route("/forumlist/:id").delete((req, response) => {
  let db_connect = dbo.getDb("cute");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("Forum").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 forum deleted");
    response.json(obj);
  });
});

// create a new forum (inputs include course code and posted by username)
// unsolved: 2nd findOne is not work
recordRoutes.route("/forumlist/add").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myobj = {
    courseid: "",
    title: req.body.title,
    postedBy: "",
    postedOn: new Date,
    text: req.body.text,
    vote: 0,
    forumComments: [""],
  };
  db_connect.collection("Course").findOne({ courseCode: req.body.coursecode }, function (err1, res1) {
    if (err1) throw err1;
    if (res1)
      myobj.courseid = ObjectId(res1._id);
  });
  db_connect.collection("User").find({ username: req.body.username }, function (err2, res2) {
    if (err2) throw err2;
    if (res2)
      myobj.postedBy = ObjectId(res2._id);
  });
  db_connect.collection("Forum").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// edit a forum
recordRoutes.route("/forumlist/:id").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      courseid: req.body.courseid,
      title: req.body.title,
      postedBy: req.body.postedBy,
      postedOn: req.body.postedOn,
      text: req.body.text,
      vote: req.body.vote,
      forumComments: req.body.forumComments,
    },
  };
  db_connect
    .collection("Forum")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 forum updated");
      response.json(res);
    });
});

// USERCOURSE
// get usercourse
recordRoutes.route("/usercourse").get(function (req, res) {
  let db_connect = dbo.getDb("cute");
  db_connect
    .collection("UserCourse")
    .aggregate([
      {
        $lookup:
        {
          from: 'Course',
          localField: 'courseid',
          foreignField: '_id',
          as: 'course'
        }
      },
      {
        $lookup:
        {
          from: 'User',
          localField: 'userid',
          foreignField: '_id',
          as: 'user'
        }
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$course", 0] }, "$$ROOT"] } }
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$user", 0] }, "$$ROOT"] } }
      },
      { $project: { course: 0, user: 0 } }
    ])
    .toArray(function (err, result) {
      if (err) throw err;
      result.forEach(object => {
        delete object['courseDescription'];
        delete object['courseName'];
        delete object['professor'];
        delete object['assessment'];
        delete object['rating'];
        delete object['comments'];
        delete object['password'];
        delete object['email'];
        delete object['propic'];
        delete object['description'];
        delete object['role'];
      })
      res.json(result);
    });
});

// delete usercourse
recordRoutes.route("/usercourse/:id").delete((req, response) => {
  let db_connect = dbo.getDb("cute");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("UserCourse").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

// add usercourse
// unsolved: 2nd findOne is not work
recordRoutes.route("/usercourse/add").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myobj = {
    userid: "",
    courseid: "",
  };
  db_connect.collection("Course").findOne({ courseCode: req.body.coursecode }, function (err1, res1) {
    if (err1) throw err1;
    if (res1)
      myobj.courseid = ObjectId(res1._id);
  });
  let find2 = db_connect.collection("User").findOne({ username: req.body.username }, function (err2, res2) {
    if (err2) throw err2;
    if (res2)
      myobj.userid = ObjectId(res2._id);
  });
  db_connect.collection("UserCourse").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

//USER
// get single usercourse by user id
recordRoutes.route("/usercourse/:id").get(function (req, res) {
  let db_connect = dbo.getDb("cute");
  let myquery2 = { userid: ObjectId(req.params.id) };
  /*let myquery2;
  db_connect
    .collection("User")
    .findOne(myquery, function (err, result) { 
      if (err) throw err;
      if (result)
        myquery2 = { userid: ObjectId(result._id) };
    });*/
  db_connect
    .collection("UserCourse").aggregate([
      { $match: myquery2 },
      {
        $lookup:
        {
          from: "Course",
          localField: "courseid",
          foreignField: "_id",
          as: "course"
        }
      }
    ]).toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// get a single user profile by id
recordRoutes.route("/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb("cute");
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("User")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// get a single course details by course code
recordRoutes.route("/course/:coursecode").get(function (req, res) {
  let db_connect = dbo.getDb("cute");
  let myquery = { courseCode: req.params.coursecode };
  db_connect
    .collection("Course")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// update a user profile by id
recordRoutes.route("/userupdate/:id").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      username: req.body.username,
      email: req.body.email,
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

// add forum comments
recordRoutes.route("/forum/newcomment/:id").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = { $push: {forumComments: { username: req.body.username, commentedOn: new Date , content: req.body.content }} };
  db_connect
    .collection("Forum")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 comment posted");
      response.json(res);
    });
});

// increase forum vote by 1
recordRoutes.route("/forum/vote/:id").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = { $inc: { vote: 1 }};
  db_connect
    .collection("Forum")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 vote added");
      response.json(res);
    });
});

// get a forum list by a specific course id
recordRoutes.route("/forum/:id").get(function (req, response) {
  let db_connect = dbo.getDb("cute");
  db_connect
  .collection("Forum")
  .aggregate([
    {
      $match: { courseid: ObjectId(req.params.id) }
    },
    {
      $lookup:
      {
        from: 'User',
        localField: 'postedBy',
        foreignField: '_id',
        as: 'user'
      }
    },
    {
      $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$user", 0] }, "$$ROOT"] } }
    },
    { $project: { user: 0 } }
  ])
  .toArray(function (err, result) {
    if (err) throw err;
    result.forEach(object => {
      delete object['password'];
      delete object['email'];
      delete object['description'];
      delete object['role'];
    });
    response.json(result);
  });
});

// get a user list by a specific course id
recordRoutes.route("/course/user/:id").get(function (req, res) {
  let db_connect = dbo.getDb("cute");
  db_connect
    .collection("UserCourse")
    .aggregate([
      {
        $match: { courseid: ObjectId(req.params.id) }
      },
      { $lookup:
        {
          from: 'User',
          localField: 'userid',
          foreignField: '_id',
          as: 'user'
        }
      },
      {
        $replaceRoot: { newRoot: { $mergeObjects: [{ $arrayElemAt: ["$user", 0] }, "$$ROOT"] } }
      },
      { $project: { user: 0 } }
    ]).toArray(function (err, result) {
      if (err) throw err;
      result.forEach(object => {
        delete object['courseid'];
      });
      res.json(result);
    }); 
});

// add course review comment (finish) & update rate (not finish)
recordRoutes.route("/coursereview/:coursecode").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myquery = { courseCode: req.params.coursecode };
  let newvalues = { $push: {comments: { username: req.body.username, commentedOn: new Date , content: req.body.content, rate: req.body.rate }}};
  db_connect
    .collection("Course")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 review posted");
      response.json(res);
    });
});

// login validation
recordRoutes.route("/login").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myquery = { email: req.body.email, password: req.body.password };
  db_connect
    .collection("User")
    .findOne(myquery, function (err, res) {
      if (err) throw err;
      if (res)
        response.json({ code: 200, msg: 'success', data: res });
      else response.json({ code: 500, msg: 'Wrong username or password' });
    });
});

// reset password
recordRoutes.route("/resetpassword/:email").post(function (req, response) {
  let db_connect = dbo.getDb("cute");
  let myquery = { email: req.params.email };
  let newvalues = { $set: {password: req.body.password} };
  db_connect
    .collection("User")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("password updated");
      response.json(res);
    });
});

// TEMP: tester
recordRoutes.route("/testing/:username").get((req, response) => {
  let db_connect = dbo.getDb("cute");
  let myquery = { username: req.params.username };

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