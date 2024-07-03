const express = require("express"); // provides a robust set of features for web and mobile applications.
const app = express(); //  creating an instance of an Express application.

let courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

app.get("/courses", (req, res) => {
    res.json(courses);
});

// server needs to listen on a port to be able to serve requests
app.listen(3000, () => console.log("Listening on port 3000..."));
