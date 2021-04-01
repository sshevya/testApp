const express = require("express");

const app = express()

const port = 7000


app.get("/", (req, res) => {
  return res.send("Hello World!");
});
app.get("/login", (req, res) => {
    return res.send('Login route!');
  });


/*
  app.get("/Signup", (req, res) => {
    return res.send('Signup route!');
  });
*/
app.listen(port, () => {
  console.log(`Server is up and running..`)
});