require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is up!");
});

module.exports = router;
// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/test')
  .then(() => {
    // listen for requests
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log('connected to db & listening on port', port)
    })
  })
  .catch((error) => {
    console.log(error)
  });
