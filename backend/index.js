const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require('bcrypt');
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");

const { connectMongoose,  User  } = require("./database.js") 

const app = express();
const port = "http://localhost:5000"; // Choose your desired port
app.use(express.json());
app.use(cors());






connectMongoose();
User()




// *  This function is used verify a google account

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

async function verifyGoogleToken(token) {
 try {
   const ticket = await client.verifyIdToken({
     idToken: token,
     audience: GOOGLE_CLIENT_ID,
   });
   return { payload: ticket.getPayload() };
 } catch (error) {
   return { error: "Invalid user detected. Please try again" };
 }
}




















app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);







app.get('/', (req, res) => {
    res.send('Hello, MongoDB and Express!');
  });







app.post("/reg", async (req, res) => {
    try {
        const {name ,  businessName , number , email , password} = req.body;
        const  existinguser = await User.findOne({number});
        if(existinguser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name :name,
            businessName : businessName ,
            number: number,
            email, email,
            password: hashedPassword,
          });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
   
  });


  app.post("/login" , async(req,res) => {
    try {
        const {number, password } = req.body;
        const user = await  User.findOne({number})
        if (!user){
            return res.status(401).json({ message: 'User not found' });

        }

        const isPasswordValid =  await bcrypt.compare(password , user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
          }
      
          res.status(200).json({ message: 'Login successful' });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
  })



  app.get('/user', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });
  

  app.listen(5000, () => {
    console.log(`Server Started at ${port}`)
  })