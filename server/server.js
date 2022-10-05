//will be main server code
const express = require('express')
//const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()
const bcrypt = require('bcrypt')
const passport = require('passport') //authentication
const connectEnsureLogin = require('connect-ensure-login') //authorization

//impoty users models temporarily for testing
const User = require('./models/Users')
const Time = require('./models/Times')


// function from pass-config.js to authenticate user
/*intilializePassport(passport, email => {
  return users.find(user => user.email === email)
})*/
const app = express()
const mongoConnect = process.env.MONGO_URI
const secret = process.env.SESSION_SECRET
 
/*                  MIDDDLEWARE                  */
//app.use(bodyparser.json({ limit: "30mb", extended: true }));
//app.use(bodyparser.urlen coded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());
//MIDDLEWARE FOR AUTHENTICATION AND AUTHORIZATION
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());

//setting up express session
app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));

// Passport Local Strategy
passport.use(User.createStrategy());

// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('this is the index page')
})

app.get('/user', (req, res) => {
    res.send('this is the home user page')
})

app.get('/login', (req, res) => {
    res.send('this is login page')
})

app.get('/time', (req, res) => {
 Time.find({}, (err, times) => {res.send(times)})
})

// this route uses http://localhost:5000/register to setup a new user
app.post('/register', async (req, res) => {
  let user = req.body
  let newUser = new  User(user)
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    newUser.password = hashedPassword
    await newUser.save()
    console.log('user added')
  }catch(error){
    res.status(400).json({message: error.message})

  }
  
})

app.post('/login',  (req, res) => {
  res.send('you logged in')
})

app.post('/time', async (req, res) => {
  let time = req.body
  let newTime = new Time(time)
  try{
    await newTime.save()
    console.log('time added')
  }catch(error){
    res.status(400).json({message: error.message})
  }
})
/*                 MONGODB              */
const connectDB = async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://admin:${mongoConnect}@cluster0.9qpgn7h.mongodb.net/?retryWrites=true&w=majority`
      );
      console.log(`mongo database is connected!!! `);
    } catch (error) {
      console.error(`Error: ${error} `);
    }
  };
  
connectDB();
  


app.listen(5000, () => console.log('server is running on port 5000'))
