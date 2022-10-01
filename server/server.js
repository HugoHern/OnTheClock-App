//will be main server code
const express = require('express')
//const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()
const bcrypt = require('bcrypt')

//impoty users models temporarily for testing
const User = require('./models/Users')


const app = express()
const mongoConnect = process.env.MONGO_URI
 
/*                  MIDDDLEWARE                  */
//app.use(bodyparser.json({ limit: "30mb", extended: true }));
//app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());
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

// this route uses http://localhost:5000/register to setup a new user
app.post('/register', async (req, res) => {
  let user = req.body
  let newUser = new  User(user)
  try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    newUser.password = hashedPassword
    await newUser.save()

  }catch(error){
    res.status(400).json({message: error.message})

  }
  
})

app.post('/login',  (req, res) => {
  res.send('you logged in')
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
