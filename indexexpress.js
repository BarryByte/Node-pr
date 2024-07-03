const express = require("express"); // provides a robust set of features for web and mobile applications.
const app = express(); //  creating an instance of an Express application.

// without express.json() middleware, the request body will be undefined.
// express.json() returns a middleware function that parses incoming requests with JSON payloads.
// what is a middleware function in layman terms?
// its job is to take the req manipulate it and respond it to the next middleware function or the route handler or the client

app.use(express.json());

let courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

app.get("/courses", (req, res) => {
  res.json(courses);
});

// POST request -> create a new course
app.post("/courses", (req, res) => {
  let newCourse = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(newCourse);
  res.send(courses);
});

// this post request will not change any data in the server
// it will just return the course with the given id
// if we want to change the data on the server also ?

app.put("/courses/:id", (req, res) => {
    let courseId = parseInt(req.params.id);
    let course = courses.find(c => c.id === courseId);
    
    // If the course doesn't exist, send a 404 response
    if (!courseId) {
      return res.status(404).send("The course with the given ID was not found.");
    }

  // Update the course's name
  course.name = req.body.name;

  // Send the updated list of courses as a response
  res.send(courses);
});

app.delete("/courses/:id", (req, res) => {
  let courseId = parseInt(req.params.id);
  // what does req.params.id do ? 
    // it extracts the id from the url
    // if the url is /courses/1 then req.params.id will be 1

  if (courseId === -1) {
    return res.status(404).send("The course with the given ID was not found.");
  }

  courses.splice(courseId-1,1);

  // Send the updated list of courses as a response
  res.send(courses);
});

// server needs to listen on a port to be able to serve requests
app.listen(3000, () => console.log("Listening on port 3000..."));
